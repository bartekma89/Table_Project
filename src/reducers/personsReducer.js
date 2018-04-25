import personsData from '../data/persons.json';
import * as constants from '../constants';

const initialState = {
	persons: personsData,
};

const personsReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.GET_PERSONS:
			console.log('getPersons');
			return {
				...state,
				persons: state.persons,
			};
		case constants.SORT_BY:
			const stateCopy = state.persons;
			const key = action.payload.key;

			const sortArr = stateCopy.sort((a, b) => {
				console.log(a);
				console.log(a[key]);
				return a[key] > b[key];
			});
			console.log(sortArr);

			return {
				...state,
				persons: sortArr,
			};
		default:
			return state;
	}
};

export default personsReducer;
