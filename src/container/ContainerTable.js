import React, { Component } from 'react';
import { getUsers, changePage, sortBy } from '../actions/actions-users';
import { connect } from 'react-redux';
import Table from '../presentation/TableComponent';
import Pagination from '../presentation/PaginationComponent';

class ContainerTable extends Component {
	componentDidMount() {
		this.props.getUsers();
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
					users={this.props.users}
					sortBy={this.sortBy.bind(this)}
				/>
				<Pagination
					startPage={this.props.startPage}
					page={this.props.currentPage}
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
		users: store.renderedUsers,
	};
};

const mapsDispatchToProps = dispatch => {
	return {
		getUsers: () => dispatch(getUsers()),
		changePage: page => dispatch(changePage(page)),
		sortBy: sortKey => dispatch(sortBy(sortKey)),
	};
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ContainerTable);
