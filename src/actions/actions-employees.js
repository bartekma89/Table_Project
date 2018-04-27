import { GET_EMPLOYEES, SORT_BY, CHANGE_PAGE } from '../constants';

export function getEmployees() {
	return {
		type: GET_EMPLOYEES,
	};
}

export function sortBy(sortKey) {
	return {
		type: SORT_BY,
		payload: {
			sortKey,
		},
	};
}

export function changePage(page) {
	return {
		type: CHANGE_PAGE,
		payload: {
			page,
		},
	};
}
