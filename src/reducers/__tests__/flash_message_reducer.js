// @flow

import { getFlashMessage, flashMessageReducer } from '../flash_message_reducer';
import type { FlashMessage } from '../../models/FlashMessage';

const MSG1 : FlashMessage = { level: 'info', message: 'message1' };
const MSG2 : FlashMessage = { level: 'error', message: 'message2' };

const state = (flashMessage: FlashMessage | null) => ({ flashMessage });

describe('flash_message_reducer', () => {
  describe('getFlashMessage', () => {
    it('works when flash message present', () => {
      expect(getFlashMessage(state(MSG1))).toEqual(MSG1);
    });

    it('works when flash message is not present', () => {
      expect(getFlashMessage(state(null))).toEqual(null);
    });
  });

  describe('flashMessageReducer', () => {
    it('initializes with proper value', () => {
      expect(flashMessageReducer(undefined, { type: 'FLASH_MESSAGE_CLEAR' }))
        .toEqual({ flashMessage: null });
    });

    it('processes FLASH_MESSAGE_ADD correctly', () => {
      expect(flashMessageReducer(state(MSG1), { type: 'FLASH_MESSAGE_ADD', flashMessage: MSG2 }))
        .toEqual({ flashMessage: MSG2 });
    });

    it('processes FLASH_MESSAGE_CLEAR correctly', () => {
      expect(flashMessageReducer({ flashMessage: MSG1 }, { type: 'FLASH_MESSAGE_CLEAR' }))
        .toEqual({ flashMessage: null });
    });
  });
});
