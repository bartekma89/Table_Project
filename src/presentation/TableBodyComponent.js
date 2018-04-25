import React from 'react';

const TableBody = ({ employees }) => {
	return (
		<tbody>
			{employees.map(employee => {
				return (
					<tr key={employee.id}>
						<td>{employee.id}</td>
						<td>{employee.firstName}</td>
						<td>{employee.lastName}</td>
						<td>{employee.dateOfBirth}</td>
						<td>{employee.company}</td>
						<td>{employee.note}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
