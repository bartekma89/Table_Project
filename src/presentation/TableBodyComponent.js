import React from 'react';

const TableBody = ({ persons }) => {
	console.log(`tablebody => ${persons}`);
	return (
		<tbody>
			{persons.map(person => {
				return (
					<tr key={person.id}>
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
