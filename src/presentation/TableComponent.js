import React from 'react';
import TableHeader from './TableHeaderComponent';
import TableBody from './TableBodyComponent';

const Table = ({ persons }) => {
	return (
		<div>
			<table>
				<TableHeader />
				<TableBody persons={persons} />
			</table>
		</div>
	);
};

export default Table;
