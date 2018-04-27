import React from 'react';

const TableHeader = ({ sortBy }) => {
	return (
		<thead>
			<tr>
				<th>
					<button>iD</button>
				</th>
				<th>
					<button>First Name</button>
				</th>
				<th>
					<button>Last Name</button>
				</th>
				<th>
					<button>BirthDate</button>
				</th>
				<th>
					<button>Company</button>
				</th>
				<th>
					<button>Note</button>
				</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
