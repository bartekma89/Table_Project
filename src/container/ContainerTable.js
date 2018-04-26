import React, { Component } from 'react';
import { getEmployees, sortBy } from '../actions/actions-employees';
import { connect } from 'react-redux';
import Table from '../presentation/TableComponent';
import data from '../data/persons.json';

class ContainerTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: data,
			currentPage: 1,
			usersPerPage: 5,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id),
		});
	}

	sortBy(key, reverse) {
		this.props.sortBy(key);
	}

	render() {
		const { users, currentPage, usersPerPage } = this.state;

		const currentUsers = users.slice(
			(currentPage - 1) * usersPerPage,
			(currentPage - 1) * usersPerPage + usersPerPage
		);

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map(pageNumber => {
			return (
				<li
					key={pageNumber}
					id={pageNumber}
					onClick={this.handleClick.bind(this)}
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
				<ul>{renderPageNumbers}</ul>
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
