import {
  CHANGE_INPUT_MESSAGE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS_OPEN,
} from '../actions/chat';
import { getNextId } from '../utils';

const initialState = {
  // State initial
  messages: [
    {
      id: 1,
      author: 'Super Chat',
      text: 'Tapez votre premier message',
    },
  ],
  inputMessage: '',
  isSettingsOpen: true,
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.value,
      };

    case ADD_MESSAGE: {
      // Création du message + ajout dans le tableau des messages du state
      const newMessage = {
        id: getNextId(state.messages),
        author: 'Super Chat',
        text: state.inputMessage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        inputMessage: '',
      };
    }

    case TOGGLE_SETTINGS_OPEN:
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };

    default:
      return state;
  }
};

export default chatReducer;
