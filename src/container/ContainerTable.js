import React, { Component } from 'react';
import { getEmployees, changePage, sortBy } from '../actions/actions-employees';
import { connect } from 'react-redux';
import Table from '../presentation/TableComponent';
import Pagination from '../presentation/PaginationComponent';

class ContainerTable extends Component {
	componentDidMount() {
		this.props.getEmployees();
	}

	onPageChange(page) {
		this.props.changePage(page);
	}

	sortBy(sortKey) {
		this.props.sortBy(sortKey);
	}

	render() {
		return (
			<div>
				<Table
					employees={this.props.employees}
					sortBy={this.sortBy.bind(this)}
				/>
				<Pagination
					startPage={this.props.startPage}
					page={this.props.page}
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
		sortBy: sortKey => dispatch(sortBy(sortKey)),
	};
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ContainerTable);
