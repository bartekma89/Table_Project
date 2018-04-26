import employeesData from '../data/persons.json';
import { GET_EMPLOYEES, SORT_BY, CHANGE_PAGE } from '../constants';

const initialState = {
	employees: employeesData,
	reverse: false,
	visibleEmployees: [],
	currentPage: 1,
	employeesPerPage: 5,
};

const employeesReducer = (state = initialState, action) => {
	const stateCopy = { ...state };

	switch (action.type) {
		case GET_EMPLOYEES:
			return {
				...state,
				employees: state.employees,
			};

		case SORT_BY:
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

			const sortedData = stateCopy.employees
				.slice()
				.sort(compareBy(sortKey));

			return {
				...state,
				employees: sortedData,
				reverse: !reverse,
			};

		case CHANGE_PAGE:
			const { employees, visibleEmployees, employeesPerPage } = stateCopy;

			let currentPage = action.payload.page;

			const indexOfLastEmployee = currentPage * employeesPerPage;
			const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
			const currentEmployees = employees.slice(
				indexOfFirstEmployee,
				indexOfLastEmployee
			);

			return {
				...state,
				visibleEmployees: currentEmployees,
				currentPage,
			};
		default:
			return state;
	}
};

export default employeesReducer;

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
