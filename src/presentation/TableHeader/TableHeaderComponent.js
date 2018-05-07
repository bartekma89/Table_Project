import React from 'react';
import Button from '../Button/ButtonComponent';
import './TableHeader.css';
import PropTypes from 'prop-types';

const TableHeader = ({ sortBy }) => {
	return (
		<thead className="tableHeader">
			<tr className="header-row">
				<th className="header-record id">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="id"
						title="iD"
					/>
				</th>
				<th className="header-record firstName">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="firstName"
						title="First Name"
					/>
				</th>
				<th className="header-record lastName">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="lastName"
						title="Last Name"
					/>
				</th>
				<th className="header-record dateOfBirth">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="dateOfBirth"
						title="Birth Date"
					/>
				</th>
				<th className="header-record company">
					<Button
						sortBy={sortBy.bind(this)}
						sortKey="company"
						title="Company"
					/>
				</th>
				<th className="header-record note">
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

TableHeader.propTypes = {
	sortBy: PropTypes.func.isRequired,
};

export default TableHeader;
