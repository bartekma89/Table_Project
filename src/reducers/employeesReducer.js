import employeesData from '../data/persons.json';
import { GET_EMPLOYEES, CHANGE_PAGE } from '../constants';

const initialState = {
	employees: employeesData,
	renderedUsers: [],
	startPage: 1,
	usersPerPage: 5,
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
			console.log(`reducer page: ${page}`);
			let paginationPageEmployees = state.employees.slice(
				(page - 1) * state.usersPerPage,
				(page - 1) * state.usersPerPage + state.usersPerPage
			);
			return {
				...state,
				renderedUsers: paginationPageEmployees,
				page,
			};

		default:
			return state;
	}
};

export default employeesReducer;
