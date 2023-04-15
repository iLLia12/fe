import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { IconButtonProps } from './types';
import { TYPE, TYPE_TO_COLOR_MAP } from '../../utils/general';

const IconButton = ({ icon, type, disabled, onClick }: IconButtonProps) => {
  const color = TYPE_TO_COLOR_MAP[type ?? TYPE.DEFAULT];
  const [isIconVisible, setIsIconVisible] = useState(false);

  let className = `transition duration-300 transition cursor-pointer text-base `;
  className += !disabled
    ? `text-${color}-500 hover:text-${color}-400 active:text-${color}-600 focus:text-${color}-400 `
    : `text-${color}-300`;

  useEffect(() => {
    setIsIconVisible(true);
  }, []);

  return (
    <>
      {isIconVisible && (
        <FontAwesomeIcon
          onClick={onClick && onClick}
          icon={icon}
          className={className}
        />
      )}
    </>
  );
};

export default IconButton;
