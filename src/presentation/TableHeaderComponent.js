import React from 'react';

const TableHeader = ({ sortBy }) => {
	return (
		<thead>
			<tr>
				<th>
					<button onClick={sortBy.bind(this, 'id')}>iD</button>
				</th>
				<th>
					<button onClick={sortBy.bind(this, 'firstName')}>
						First Name
					</button>
				</th>
				<th>
					<button onClick={sortBy.bind(this, 'lastName')}>
						Last Name
					</button>
				</th>
				<th>
					<button onClick={sortBy.bind(this, 'dateOfBirth')}>
						Birth Date
					</button>
				</th>
				<th>
					<button onClick={sortBy.bind(this, 'company')}>
						Company
					</button>
				</th>
				<th>
					<button onClick={sortBy.bind(this, 'note')}>Note</button>
				</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
