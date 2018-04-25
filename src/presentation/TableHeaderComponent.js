import React from 'react';

const TableHeader = props => {
	const headers = [
		'iD',
		'first Name',
		'last Name',
		'Birth date',
		'Company',
		'Note',
	];
	console.log(props.persons);
	return (
		<thead>
			<tr>
				<th>
					<button onClick={props.sortBy.bind(this, 'id')}>iD</button>
				</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Birth Date</th>
				<th>Company</th>
				<th>
					<button onClick={props.sortBy.bind(this, 'note')}>
						Note
					</button>
				</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
