import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
const useOutsideClick = (callback: Function) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};

export default useOutsideClick;
