import React from 'react';
import TableHeader from '../TableHeader/TableHeaderComponent';
import TableBody from '../TableBody/TableBodyComponent';
import './Table.css';

const Table = ({ ...props }) => {
	return (
		<div>
			<table id="table">
				<TableHeader {...props} />
				<TableBody {...props} />
			</table>
		</div>
	);
};

export default Table;
