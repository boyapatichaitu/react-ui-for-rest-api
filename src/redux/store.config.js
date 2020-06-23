import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Root from './reducer';

const store = createStore(Root, applyMiddleware(thunk));

export default store;