import React from 'react';
import TableHeader from './TableHeaderComponent';
import TableBody from './TableBodyComponent';

const Table = ({ ...props }) => {
	return (
		<div>
			<table>
				<TableHeader {...props} />
				<TableBody {...props} />
			</table>
		</div>
	);
};

export default Table;
