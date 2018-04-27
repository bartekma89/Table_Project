import { createStore } from 'redux';
import usersReducer from '../reducers/usersReducer';
import DevTools from '../DevTools';

const store = createStore(usersReducer, DevTools.instrument());

export default store;
