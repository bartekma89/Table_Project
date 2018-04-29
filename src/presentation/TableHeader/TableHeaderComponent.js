import React from 'react';
import Button from '../Button/ButtonComponent';
import './TableHeader.css';

const TableHeader = ({ sortBy }) => {
	return (
		<thead>
			<tr className="row">
				<th className="record-header id">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="id"
						title="iD"
					/>
				</th>
				<th className="record-header firstName">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="firstName"
						title="First Name"
					/>
				</th>
				<th className="record-header lastName">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="lastName"
						title="Last Name"
					/>
				</th>
				<th className="record-header dateOfBirth">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="dateOfBirth"
						title="Birth Date"
					/>
				</th>
				<th className="record-header company">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="company"
						title="Company"
					/>
				</th>
				<th className="record-header note">
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
