import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  Ref,
} from 'react';
import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';
import { Placement } from '@popperjs/core/lib/enums';
import useAppSelector from '../../store/useAppSelector';

interface PortalProps {
  content: ReactNode;
  trigger: ReactNode;
  placement?: Placement;
  imperativeHandleRef?: Ref<{ close: () => void }>;
}

const popoverBaseClassName = 'popover z-10 ';

const Popover = ({
  content,
  trigger,
  placement = 'top-start',
  imperativeHandleRef = null,
}: PortalProps) => {
  const { isLeftSideBarOpen } = useAppSelector((state) => state.feSettings);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);

  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement,
      strategy: 'fixed',
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrowRef,
          },
        },
        {
          name: 'offset',
          options: {
            offset: [5, 5],
          },
        },
      ],
    }
  );
  const refPortal = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [popoverClassName, setPopoverClassName] =
    useState(popoverBaseClassName);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    update && update();
  }, [isLeftSideBarOpen, update]);

  useEffect(() => {
    refPortal.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isHidden) {
      const cl = popoverBaseClassName + ' opacity-0 ';
      setPopoverClassName(cl);
      setTimeout(() => {
        setPopoverClassName(cl + ' hidden');
      }, 100);
    } else {
      const cl = popoverBaseClassName + ' opacity-0 ';
      setPopoverClassName(cl);
      setTimeout(() => {
        setPopoverClassName(popoverBaseClassName + ' opacity-100');
      }, 100);
    }
  }, [isHidden]);

  const handleOnClick = () => {
    setIsHidden(!isHidden);
    setTouched(true);
    update && update();
  };

  const handleClick = useCallback(
    (event: MouseEvent) =>
      popperElement &&
      !popperElement.contains(event.target as Node) &&
      setIsHidden(true),
    [popperElement, setIsHidden]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [popperElement, handleClick]);

  useImperativeHandle(
    imperativeHandleRef,
    () => {
      return {
        close() {
          setIsHidden(true);
        },
      };
    },
    []
  );

  return mounted && refPortal.current ? (
    <>
      <div
        ref={setReferenceElement}
        onClick={() => handleOnClick()}
        className={'inline-block'}
      >
        {trigger}
      </div>
      {touched &&
        createPortal(
          <div
            className={popoverClassName}
            ref={setPopperElement}
            style={{
              transition: 'opacity 0.1s linear',
              ...styles.popper,
            }}
            {...attributes.popper}
          >
            <>
              {content}
              <div className={'arrow'} ref={setArrowRef} />
            </>
          </div>,
          refPortal.current
        )}
    </>
  ) : null;
};

export default Popover;
