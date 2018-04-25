import employeesData from '../data/persons.json';
import * as constants from '../constants';

const initialState = {
	employees: employeesData,
	reverse: false,
};

const compare = {
	text: (key, a, b) => {
		if (a[key] < b[key]) {
			return -1;
		} else {
			return a[key] > b[key] ? 1 : 0;
		}
	},
	number: (key, a, b) => {
		return a[key] - b[key];
	},
	date: (key, a, b) => {
		a = new Date(dateConverter(a[key]));
		b = new Date(dateConverter(b[key]));
		return a.getTime() - b.getTime();
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
		case constants.GET_EMPLOYEES:
			return {
				...state,
				employees: state.employees,
			};
		case constants.SORT_BY:
			const stateCopy = state.employees.slice();
			const key = action.payload.sortKey;
			var reverse = state.reverse;

			const compareBy = function(key) {
				return function(a, b) {
					switch (key) {
						case 'id':
						case 'note':
							return compare.number(key, a, b);
						case 'dateOfBirth':
							return compare.date(key, a, b);
						default:
							return compare.text(key, a, b);
					}
				};
			};

			const sortedData = stateCopy.sort(compareBy(key));

			if (!state.reverse) {
				sortedData;
				reverse = true;
			} else {
				sortedData.reverse();
				reverse = false;
			}

			return {
				...state,
				employees: sortedData,
				reverse,
			};
		default:
			return state;
	}
};

export default personsReducer;
