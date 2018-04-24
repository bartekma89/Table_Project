import React from 'react';

const TableBody = ({ persons }) => {
	return (
		<tbody>
			{persons.map(person => {
				return (
					<tr>
						<td>{person.id}</td>
						<td>{person.firstName}</td>
						<td>{person.lastName}</td>
						<td>{person.dateOfBirth}</td>
						<td>{person.company}</td>
						<td>{person.note}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
