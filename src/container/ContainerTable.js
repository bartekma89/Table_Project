import React, { Component } from 'react';
import { getEmployees, changePage } from '../actions/actions-employees';
import { connect } from 'react-redux';
import Table from '../presentation/TableComponent';
import Pagination from '../presentation/PaginationComponent';

class ContainerTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			renderedUsers: [],
			page: 1,
			usersPerPage: 5,
			total: null,
		};
	}

	componentDidMount() {
		this.props.getEmployees();
	}

	onPageChange(page) {
		this.props.changePage(page);
	}

	render() {
		return (
			<div>
				<Table employees={this.props.employees} />
				<Pagination
					startPage={this.props.startPage}
					quantityPages={Math.ceil(
						this.props.total / this.props.usersPerPage
					)}
					onPageChange={this.onPageChange.bind(this)}
				/>
			</div>
		);
	}
}

const mapsStateToProps = store => {
	return {
		...store,
		employees: store.renderedUsers,
	};
};

const mapsDispatchToProps = dispatch => {
	return {
		getEmployees: () => dispatch(getEmployees()),
		changePage: page => dispatch(changePage(page)),
	};
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ContainerTable);
