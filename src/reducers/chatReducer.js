import { CHANGE_INPUT_MESSAGE, ADD_MESSAGE } from '../components/actions/chat';

const initialState = {
  // State initial
  messages: [],
  inputMessage: '',
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
        id: state.messages.length + 1,
        author: 'Super Chat',
        text: state.inputMessage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        inputMessage: '',
      };
    }

    default:
      return state;
  }
};

export default chatReducer;
