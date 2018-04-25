import * as constants from '../constants';

export function getPersons() {
	return {
		type: constants.GET_PERSONS,
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
