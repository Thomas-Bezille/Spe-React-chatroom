import axios from 'axios';
import { SUBMIT_LOGIN, handleSuccessFulLogin } from '../actions/chat';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          // URL
          'http://localhost:3001/login',
          // Les données à envoyer
          {
            email: store.getState().email,
            password: store.getState().password,
          }
        )
        .then((response) => {
          store.dispatch(handleSuccessFulLogin(response.data.pseudo));
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;

    default:
  }

  next(action);
};

export default authMiddleware;
