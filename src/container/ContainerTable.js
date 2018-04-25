import React, { Component } from 'react';
import * as personsAction from '../actions/actions-persons';
import { connect } from 'react-redux';
import Table from '../presentation/TableComponent';

class ContainerTable extends Component {
	componentDidMount() {
		this.props.getPersons();
	}

	sortBy(key) {
		console.log('sortBy');
		console.log(key);
		console.log(this.props.persons);
		this.props.sortBy(key);
	}
	render() {
		return (
			<Table
				persons={this.props.persons}
				sortBy={this.sortBy.bind(this)}
			/>
		);
	}
}

const mapsStateToProps = store => {
	return {
		persons: store.persons,
	};
};

const mapsDispatchToProps = dispatch => {
	return {
		getPersons: () => dispatch(personsAction.getPersons()),
		sortBy: key => dispatch(personsAction.sortBy(key)),
	};
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ContainerTable);
