import {
  CHANGE_INPUT_MESSAGE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS_OPEN,
  CHANGE_SETTINGS_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  HANDLE_MESSAGE_RECEIVED,
} from '../actions/chat';
import { getNextId } from '../utils';

const initialState = {
  // State initial
  messages: [],
  inputMessage: '',
  isSettingsOpen: true,
  email: '',
  password: '',
  nickname: '',
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
        author: state.nickname,
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

    case CHANGE_SETTINGS_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };

    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        nickname: action.nickname,
        isSettingsOpen: false,
        email: '',
        password: '',
      };

    case HANDLE_MESSAGE_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
      };

    default:
      return state;
  }
};

export default chatReducer;
