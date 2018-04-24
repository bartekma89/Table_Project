import { createStore } from 'redux';
import personsReducer from '../reducers/personsReducer';

const store = createStore(personsReducer);

export default store;
