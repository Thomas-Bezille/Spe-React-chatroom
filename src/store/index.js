import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/chatReducer';

// On importe les middlewares
import authMiddleware from '../middlewares/authMiddleware';
import socketMiddleware from '../middlewares/socketMiddleware';

// On construit le enhancer pour les middleware : appel à applyMiddleware avec les middlewares en arguments
const enhancerWithMiddlewares = applyMiddleware(
  authMiddleware,
  socketMiddleware
  // anotherMiddleware
);

// On combine avec les dev tools : composeWithDevTools permet de rajouter les dev tools au enhancer fourni en argument, pour obtenir un nouveau enhancer
const superEnhancer = composeWithDevTools(enhancerWithMiddlewares);

const store = createStore(reducer, superEnhancer);

export default store;
