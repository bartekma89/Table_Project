import React, { Component } from 'react';

class Pagination extends Component {
	constructor(props) {
		super(props);
	}

	onPageChange(event) {
		let page = event.target.id;
		console.log(page);
		this.props.onPageChange(page);
	}

	render() {
		const pages = [];

		for (let i = this.props.startPage; i <= this.props.quantityPages; i++) {
			pages.push(
				<li key={i} onClick={this.onPageChange.bind(this)} id={i}>
					{i}
				</li>
			);
		}

		return <ul>{pages}</ul>;
	}
}

export default Pagination;
