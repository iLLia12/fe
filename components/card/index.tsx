import { ReactNode } from 'react';

export enum Shadow {
  SHADOW = 'shadow',
  NONE = 'NONE',
}

const Card = ({
  shadow = Shadow.SHADOW,
  bodyStyle = 'p-3',
  children,
}: {
  shadow?: Shadow;
  bodyStyle?: string;
  children?: ReactNode;
}) => {
  const shadowClass = Shadow.NONE === shadow ? '' : shadow;

  return (
    <div className={`rounded ${shadowClass} ${bodyStyle}`}>{children}</div>
  );
};

export default Card;
