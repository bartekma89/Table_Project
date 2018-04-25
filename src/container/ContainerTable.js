import React, { Component } from 'react';
import { getEmployees, sortBy } from '../actions/actions-employees';
import { connect } from 'react-redux';
import Table from '../presentation/TableComponent';

class ContainerTable extends Component {
	componentDidMount() {
		this.props.getEmployees();
	}

	sortBy(key) {
		this.props.sortBy(key);
	}
	render() {
		return (
			<Table
				employees={this.props.employees}
				sortBy={this.sortBy.bind(this)}
			/>
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
		sortBy: key => dispatch(sortBy(key)),
	};
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ContainerTable);
