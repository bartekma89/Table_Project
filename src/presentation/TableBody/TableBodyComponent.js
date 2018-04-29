import React from 'react';
import './TableBody.css';

const TableBody = ({ users }) => {
	return (
		<tbody>
			{users.map(user => {
				return (
					<tr className="row" key={user.id}>
						<td className="record-body id">{user.id}</td>
						<td className="record-body firstName">
							{user.firstName}
						</td>
						<td className="record-body lastName">
							{user.lastName}
						</td>
						<td className="record-body dateOfBirth">
							{formatChange(user.dateOfBirth)}
						</td>
						<td className="record-body company">{user.company}</td>
						<td className="record-body note">{user.note}</td>
					</tr>
				);
			})}
		</tbody>
	);
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
