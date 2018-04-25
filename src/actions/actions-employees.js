import * as constants from '../constants';

export function getEmployees() {
	return {
		type: constants.GET_EMPLOYEES,
	};
}

export function sortBy(sortKey) {
	return {
		type: constants.SORT_BY,
		payload: {
			sortKey,
		},
	};
}
