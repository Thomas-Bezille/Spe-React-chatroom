import { HANDLE_SUCCESSFUL_LOGIN } from '../actions/chat';

let socket;

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_SUCCESSFUL_LOGIN:
      let socket = window.io('http://localhost:3001');
      break;

    default:
      break;
  }

  next(action);
};

export default socketMiddleware;
