export enum LAYOUTS {
  NON = 'none',
  ADMIN = 'admin',
}

export enum TYPE {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export enum COLORS {
  WHITE = 'white',
  GREEN = 'green',
  EMERALD = 'emerald', // green
  RED = 'red',
  ROSE = 'rose',
  ORANGE = 'orange',
  BLUE = 'blue',
  GRAY = 'gray',
}

export enum SIZE {
  MINI = 'mini',
  SMALL = 'small',
  MEDIUM = 'medium',
  DEFAULT = 'default',
}

export const TYPE_TO_COLOR_MAP = Object.freeze({
  [TYPE.DEFAULT]: COLORS.WHITE,
  [TYPE.PRIMARY]: COLORS.BLUE,
  [TYPE.SUCCESS]: COLORS.GREEN,
  [TYPE.ERROR]: COLORS.ROSE,
  [TYPE.WARNING]: COLORS.ORANGE,
  [TYPE.INFO]: COLORS.GRAY,
});

export enum NEXT_AUTH_STATUS {
  AUTHENTICATED = 'authenticated',
  LOADING = 'loading',
}
