import { HANDLE_SUCCESSFUL_LOGIN, SEND_MESSAGE } from '../actions/chat';

let socket;

/**
 * Gère tout ce qui concerne le websocket
 */
const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_SUCCESSFUL_LOGIN:
      socket = window.io('http://localhost:3001');

      socket.on('server_send_message', (data) => {
        console.log(data);
        // todo : Ajout du message sur l'interface
      });
      break;

    case SEND_MESSAGE:
      socket.emit('client_send_message', {
        author: store.getState().nickname,
        content: store.getState().inputMessage,
      });
      break;

    default:
      break;
  }

  next(action);
};

export default socketMiddleware;
