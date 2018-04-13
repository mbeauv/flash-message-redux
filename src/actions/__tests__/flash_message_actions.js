// @flow

import type { FlashMessageLevel } from '../../models/FlashMessage';
import {
  flashInfo,
  flashWarning,
  flashError,
  clearFlash,
} from '../flash_message_actions';
import type { FlashMessageAction } from '../flash_message_actions';

const MSG = 'a message';

const addFlashAction = (level : FlashMessageLevel, message: string) : FlashMessageAction => ({
  type: 'FLASH_MESSAGE_ADD',
  flashMessage: { level, message },
}
);

describe('flash_message_actions', () => {
  describe('flashInfo', () => {
    it('creates an add action with info level', () => {
      expect(flashInfo(MSG)).toEqual(addFlashAction('info', MSG));
    });
  });

  describe('flashWarning', () => {
    it('creates an add action with warning level', () => {
      expect(flashWarning(MSG)).toEqual(addFlashAction('warning', MSG));
    });
  });

  describe('flashError', () => {
    it('creates an add action with error level', () => {
      expect(flashError(MSG)).toEqual(addFlashAction('error', MSG));
    });
  });

  describe('clearFlash', () => {
    it('clears a flash event', () => {
      expect(clearFlash()).toEqual({ type: 'FLASH_MESSAGE_CLEAR' });
    });
  });
});
