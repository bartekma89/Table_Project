import employeesData from '../data/persons.json';
import * as constants from '../constants';

const initialState = {
	employees: employeesData,
};

const personsReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.GET_EMPLOYEES:
			return {
				...state,
				employees: state.employees,
			};
		case constants.SORT_BY:
			const stateCopy = state.employees.slice();
			const key = action.payload.key;

			const sortArr = stateCopy.sort((a, b) => {
				return a[key] > b[key];
			});

			return {
				...state,
				employees: sortArr,
			};
		default:
			return state;
	}
};

export default personsReducer;
