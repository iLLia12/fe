import React from 'react';
import { ButtonNativeType, ButtonProps } from './types';
import { SIZE, TYPE, TYPE_TO_COLOR_MAP } from '../../utils/general';

const Button = ({
  text,
  type = TYPE.DEFAULT,
  nativeType = ButtonNativeType.BUTTON,
  onClick,
  size,
  disabled,
  shadow,
  border = true,
}: ButtonProps) => {
  const color = TYPE_TO_COLOR_MAP[type];
  let className = 'inline transition ';
  className += shadow ? 'drop-shadow-md ' : '';
  className += border ? `border border-${color}-300 ` : '';
  className += type === TYPE.DEFAULT ? `text-gray-500 ` : `text-gray-100 `;
  className += disabled
    ? `cursor-not-allowed bg-${color}-300`
    : `bg-${color}-600 hover:bg-${color}-500 active:bg-${color}-600 focus:bg-${color}-500`;

  const paddingClass = size
    ? sizeToClassMap[size]
    : sizeToClassMap[SIZE.DEFAULT];

  const handleOnClick = () => {
    onClick && onClick();
  };

  return (
    <button
      type={nativeType}
      disabled={disabled}
      className={`${paddingClass} ${className}`}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
};

export default Button;

const sizeToClassMap = {
  [SIZE.MINI]: 'px-1 text-xs rounded',
  [SIZE.SMALL]: 'pt-0.5 pb-0.5 px-2 text-sm rounded',
  [SIZE.MEDIUM]: 'pt-1 pb-1 px-2 text-base rounded-md',
  [SIZE.DEFAULT]: 'pt-1.5 pb-1.5 px-3 text-base rounded-md',
};
