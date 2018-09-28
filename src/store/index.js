import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunkMiddleware,
    loggerMiddleware))(createStore);
  return createStoreWithMiddleware(rootReducer,
    preloadedState);
  // return createStore(
  //   rootReducer,
  //   preloadedState,
  //   applyMiddleware(
  //     thunkMiddleware,
  //     loggerMiddleware
  //   )
  // );
}