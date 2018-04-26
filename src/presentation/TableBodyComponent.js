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
							{employee.dateOfBirth
								.split(' ')
								.slice(0, 1)
								.join('')
								.split('.')
								.join('-')}
						</td>
						<td className="company">{employee.company}</td>
						<td className="note">{employee.note}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
