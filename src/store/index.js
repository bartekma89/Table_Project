import { createStore } from 'redux';
import personsReducer from '../reducers/personsReducer';
import DevTools from '../DevTools';

const store = createStore(personsReducer, DevTools.instrument());

export default store;
