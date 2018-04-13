// @flow

import type { FlashMessage } from '../models/FlashMessage';
import type { FlashMessageAction } from '../actions/flash_message_actions';

type State = {
  +flashMessage: ?FlashMessage,
};

const INITIAL_STATE = { flashMessage: null };

export function flashMessageReducer(state : State = INITIAL_STATE, action: FlashMessageAction)
: State {
  switch (action.type) {
    case 'FLASH_MESSAGE_ADD':
      return { ...state, flashMessage: action.flashMessage };
    case 'FLASH_MESSAGE_CLEAR':
      return { ...state, flashMessage: null };
    default:
      return state;
  }
}

export const getFlashMessage = (state : State) => state.flashMessage;
