import React, { Component } from 'react';
import * as personsAction from '../actions/actions-persons';
import { connect } from 'react-redux';
import Table from '../presentation/TableComponent';

class ContainerTable extends Component {
	componentDidMount() {
		this.props.getPersons();
	}

	render() {
		return <Table persons={this.props.persons} />;
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
	};
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ContainerTable);
