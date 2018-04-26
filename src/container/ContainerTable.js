import React, { Component } from 'react';
import { getEmployees, sortBy } from '../actions/actions-employees';
import { connect } from 'react-redux';
import Table from '../presentation/TableComponent';
import data from '../data/persons.json';

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
		this.setState({
			users: data,
			renderedUsers: data.slice(0, this.state.usersPerPage),
			total: data.length,
		});
	}

	handleClick(page) {
		this.setState({
			page,
		});
	}
	onPrevPage(event) {
		this.handleClick(this.state.page - 1);
	}

	onNextPage(event) {
		this.handleClick(this.state.page + 1);
	}

	onChangePage(event) {
		this.handleClick(event.target.id);
	}

	sortBy(key, reverse) {
		this.props.sortBy(key);
	}

	render() {
		const { users, page, usersPerPage, total } = this.state;

		const currentUsers = users.slice(
			(page - 1) * usersPerPage,
			(page - 1) * usersPerPage + usersPerPage
		);

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(total / usersPerPage); i++) {
			pageNumbers.push(i);
		}

		const nextPage =
			this.state.page === 2 ? null : (
				<div onClick={this.onNextPage.bind(this)}>next</div>
			);
		const prevPage =
			this.state.page === 1 ? null : (
				<div onClick={this.onPrevPage.bind(this)}>prev</div>
			);

		const renderPageNumbers = pageNumbers.map(pageNumber => {
			return (
				<li
					key={pageNumber}
					id={pageNumber}
					onClick={this.onChangePage.bind(this)}
				>
					{pageNumber}
				</li>
			);
		});

		return (
			<div>
				<Table
					employees={currentUsers}
					sortBy={this.sortBy.bind(this)}
				/>
				{prevPage}
				<ul>{renderPageNumbers}</ul>
				{nextPage}
			</div>
		);
	}
}

const mapsStateToProps = store => {
	return {
		employees: store.employees,
	};
};

const mapsDispatchToProps = dispatch => {
	return {
		getEmployees: () => dispatch(getEmployees()),
		sortBy: (key, reverse) => dispatch(sortBy(key)),
	};
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ContainerTable);
