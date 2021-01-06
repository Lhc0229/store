import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';
const middleware = [ thunk ];
export const store = createStore(reducer, {},applyMiddleware(...middleware))