import usersData from '../data/persons.json';
import { GET_USERS, CHANGE_PAGE, SORT_BY } from '../constants';

const initialState = {
	users: usersData,
	renderedUsers: [],
	startPage: 1,
	usersPerPage: 5,
	currentPage: 1,
	reverse: false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			const renderedUsers = state.users.slice(0, state.usersPerPage);
			const total = state.users.length;

			return {
				...state,
				renderedUsers,
				total,
			};

		case CHANGE_PAGE:
			const currentPage = action.payload.page;
			let currentUsers = state.users.slice(
				(currentPage - 1) * state.usersPerPage,
				(currentPage - 1) * state.usersPerPage + state.usersPerPage
			);
			return {
				...state,
				renderedUsers: currentUsers,
				currentPage,
			};

		case SORT_BY:
			const stateCopy = state.users.slice();
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

			const sortedUsers = stateCopy.sort(compareBy(sortKey));
			const sortedCurrentUsers = sortedUsers.slice(
				(state.currentPage - 1) * state.usersPerPage,
				(state.currentPage - 1) * state.usersPerPage +
					state.usersPerPage
			);

			return {
				...state,
				users: sortedUsers,
				renderedUsers: sortedCurrentUsers,
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

export default usersReducer;
