import React from 'react';
import './TableBody.css';
import PropTypes from 'prop-types';

const TableBody = ({ users, sortBy }) => {
	if (document.documentElement.clientWidth > 767) {
		return (
			<tbody className="tableBody">
				{users.map(user => {
					return (
						<tr className="body-row" key={user.id}>
							<td className="body-record id">{user.id}</td>
							<td className="body-record firstName">
								{user.firstName}
							</td>
							<td className="body-record lastName">
								{user.lastName}
							</td>
							<td className="body-record dateOfBirth">
								{formatChange(user.dateOfBirth)}
							</td>
							<td className="body-record company">
								{user.company}
							</td>
							<td className="body-record note">{user.note}</td>
						</tr>
					);
				})}
			</tbody>
		);
	} else {
		return (
			<tbody className="tableBody">
				{users.map(user => {
					return (
						<tr className="body-row" key={user.id}>
							<td
								className="body-record id"
								onClick={sortBy.bind(this, 'id')}
							>
								{user.id}
							</td>
							<td
								className="body-record firstName"
								onClick={sortBy.bind(this, 'firstName')}
							>
								{user.firstName}
							</td>
							<td
								className="body-record lastName"
								onClick={sortBy.bind(this, 'lastName')}
							>
								{user.lastName}
							</td>
							<td
								className="body-record dateOfBirth"
								onClick={sortBy.bind(this, 'dateOfBirth')}
							>
								{formatChange(user.dateOfBirth)}
							</td>
							<td
								className="body-record company"
								onClick={sortBy.bind(this, 'company')}
							>
								{user.company}
							</td>
							<td
								className="body-record note"
								onClick={sortBy.bind(this, 'note')}
							>
								{user.note}
							</td>
						</tr>
					);
				})}
			</tbody>
		);
	}
};

TableBody.propTypes = {
	users: PropTypes.array.isRequired,
	sortBy: PropTypes.func.isRequired,
};

function formatChange(element) {
	let months = [
		'styczeń',
		'luty',
		'marzec',
		'kwiecień',
		'maj',
		'czerwiec',
		'lipiec',
		'sierpien',
		'wrzesień',
		'październik',
		'listopad',
		'grudzień',
	];

	let removeTime = element
		.split(' ')
		.slice(0, 1)
		.join('');

	let removeZeroPrefix = removeTime.replace(/\b0/g, '');
	let dateArray = removeZeroPrefix.split('.');
	let newDateFormat = removeZeroPrefix.replace(
		`.${dateArray[1]}.`,
		` ${months[dateArray[1]]} `
	);
	return newDateFormat;
}

export default TableBody;
