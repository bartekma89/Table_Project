import React from 'react';

const TableBody = ({ employees }) => {
	return (
		<tbody>
			{employees.map(employee => {
				return (
					<tr key={employee.id}>
						<td className="id">{employee.id}</td>
						<td className="firstName">{employee.firstName}</td>
						<td className="lastName">{employee.lastName}</td>
						<td className="dateOfBirth">
							{formatChange(employee.dateOfBirth)}
						</td>
						<td className="company">{employee.company}</td>
						<td className="note">{employee.note}</td>
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
