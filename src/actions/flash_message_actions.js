// @flow

import type {
  FlashMessage,
  FlashMessageLevel,
} from '../models/FlashMessage';

export type FlashMessageAction =
  | { type: 'FLASH_MESSAGE_ADD', flashMessage: FlashMessage }
  | { type: 'FLASH_MESSAGE_CLEAR' };

/** Returns the Redux state. */
export type FlashMessageGetState = () => Object;

/** Flow definition of a dispatcher action. */
export type FlashMessageDispatch = (action: FlashMessageAction) => any;

const log = (level: FlashMessageLevel, message: string)
  : FlashMessageAction => ({ type: 'FLASH_MESSAGE_ADD', flashMessage: { level, message } });

export const flashInfo = (msg: string) : FlashMessageAction => log('info', msg);
export const flashWarning = (msg: string) : FlashMessageAction => log('warning', msg);
export const flashError = (msg: string) : FlashMessageAction => log('error', msg);
export const clearFlash = () : FlashMessageAction => ({ type: 'FLASH_MESSAGE_CLEAR' });
