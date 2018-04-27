import { createStore } from 'redux';
import employeesReducer from '../reducers/employeesReducer';
import DevTools from '../DevTools';

const store = createStore(employeesReducer, DevTools.instrument());

export default store;
