import React from 'react';
import Button from '../Button/ButtonComponent';

const TableHeader = ({ sortBy }) => {
	return (
		<thead>
			<tr className="row">
				<th>
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="id"
						title="iD"
					/>
				</th>
				<th>
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="firstName"
						title="First Name"
					/>
				</th>
				<th>
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="lastName"
						title="Last Name"
					/>
				</th>
				<th>
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="dateOfBirth"
						title="Birth Date"
					/>
				</th>
				<th>
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="company"
						title="Company"
					/>
				</th>
				<th>
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="note"
						title="Note"
					/>
				</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
