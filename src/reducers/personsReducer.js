import employeesData from '../data/persons.json';
import { GET_EMPLOYEES, SORT_BY } from '../constants';

const initialState = {
	employees: employeesData,
	reverse: false,
};

const compare = {
	text: (key, reverse, a, b) => {
		return !reverse ? a[key] < b[key] : a[key] > b[key];
	},
	number: (key, reverse, a, b) => {
		return !reverse ? a[key] - b[key] : b[key] - a[key];
	},
	date: (key, reverse, a, b) => {
		a = new Date(dateConverter(a[key]));
		b = new Date(dateConverter(b[key]));
		return !reverse ? a - b : b - a;
	},
};

const dateConverter = date => {
	const newDate = date
		.split(' ')
		.slice(0, 1)
		.join('')
		.split('.')
		.reverse()
		.join('-');
	return newDate;
};

const personsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_EMPLOYEES:
			return {
				...state,
				employees: state.employees,
			};
		case SORT_BY:
			const stateCopy = state.employees.slice();
			const sortKey = action.payload.sortKey;
			var reverse = state.reverse;

			const compareBy = function(sortKey) {
				return function(a, b) {
					switch (sortKey) {
						case 'id':
						case 'note':
							return compare.number(sortKey, reverse, a, b);
						case 'dateOfBirth':
							return compare.date(sortKey, reverse, a, b);
						default:
							return compare.text(sortKey, reverse, a, b);
					}
				};
			};

			const sortedData = stateCopy.sort(compareBy(sortKey));

			return {
				...state,
				employees: sortedData,
				reverse: !reverse,
			};
		default:
			return state;
	}
};

export default personsReducer;
