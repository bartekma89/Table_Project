import React from 'react';
import TableHeader from './TableHeaderComponent';
import TableBody from './TableBodyComponent';

const Table = ({ ...props }) => {
	console.log(props.persons[1].id);
	return (
		<div>
			<table>
				<TableHeader {...props} />
				<TableBody persons={props.persons} />
			</table>
		</div>
	);
};

export default Table;
