import React, { Component } from 'react';

class ContainerPagination extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: props.items,
			itemsPerPage: 5,
			currentPage: 1,
		};

		this.onChangePage = this.onChangePage.bind(this);
	}

	onChangePage(event) {
		this.setState({
			currentPage: Number(event.target.id),
		});
	}

	render() {
		const { items, itemsPerPage, currentPage } = this.state;

		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

		return (
			<ul>
				<li />
			</ul>
		);
	}
}

export default ContainerPagination;
