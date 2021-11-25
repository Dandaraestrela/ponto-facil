import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import SAGAS from 'store/sagas';
import REDUCERS from 'store/ducks';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(
  REDUCERS,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(SAGAS);
