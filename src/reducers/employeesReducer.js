import employeesData from '../data/persons.json';
import { GET_EMPLOYEES, CHANGE_PAGE, SORT_BY } from '../constants';

const initialState = {
	employees: employeesData,
	renderedUsers: [],
	startPage: 1,
	usersPerPage: 5,
	page: 1,
	reverse: false,
};

const employeesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_EMPLOYEES:
			const renderedUsers = state.employees.slice(0, state.usersPerPage);
			const total = state.employees.length;

			return {
				...state,
				renderedUsers,
				total,
			};

		case CHANGE_PAGE:
			const page = action.payload.page;
			let paginationPageEmployees = state.employees.slice(
				(page - 1) * state.usersPerPage,
				(page - 1) * state.usersPerPage + state.usersPerPage
			);
			return {
				...state,
				renderedUsers: paginationPageEmployees,
				page,
			};

		case SORT_BY:
			const stateCopy = state.employees.slice();
			const sortKey = action.payload.sortKey;
			const reverse = state.reverse;

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
			const sortedDataPagination = sortedData.slice(
				(state.page - 1) * state.usersPerPage,
				(state.page - 1) * state.usersPerPage + state.usersPerPage
			);

			return {
				...state,
				employees: sortedData,
				renderedUsers: sortedDataPagination,
				reverse: !reverse,
			};

		default:
			return state;
	}
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

export default employeesReducer;
