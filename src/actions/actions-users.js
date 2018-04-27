import { GET_USERS, SORT_BY, CHANGE_PAGE } from '../constants';

export function getUsers() {
	return {
		type: GET_USERS,
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
