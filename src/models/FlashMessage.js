// @flow

export type FlashMessageLevel = 'info' | 'warning' | 'error';

export type FlashMessage = {
  +level: FlashMessageLevel,
  +message: string,
};
