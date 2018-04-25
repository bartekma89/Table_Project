import * as constants from '../constants';

export function getEmployees() {
	return {
		type: constants.GET_EMPLOYEES,
	};
}

export function sortBy(key) {
	return {
		type: constants.SORT_BY,
		payload: {
			key,
		},
	};
}
