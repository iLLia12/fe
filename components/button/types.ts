import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { SIZE, TYPE } from '../../utils/general';

export interface IconButtonProps {
  icon: IconDefinition;
  type?: TYPE;
  disabled?: boolean;
  onClick?: () => void;
}

export enum ButtonNativeType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export interface ButtonProps {
  text?: string;
  type?: TYPE;
  nativeType?: ButtonNativeType;
  onClick?: () => void;
  size?: SIZE;
  disabled?: boolean;
  shadow?: boolean;
  border?: boolean;
}
