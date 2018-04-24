import personsData from '../data/persons.json';
import * as constants from '../constants';

const initialState = {
	persons: personsData,
};

const personsReducer = (state = initialState, action) => {
	switch (action.action) {
		case constants.GET_PERSONS:
			return {
				...state,
				persons: state.persons,
			};
		default:
			return state;
	}
};

export default personsReducer;
