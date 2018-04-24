import React from 'react';

const TableHeader = () => {
	const headers = [
		'iD',
		'first Name',
		'last Name',
		'Birth date',
		'Company',
		'Note',
	];
	return (
		<thead>
			<tr>{headers.map(header => <th>{header}</th>)}</tr>
		</thead>
	);
};

export default TableHeader;
