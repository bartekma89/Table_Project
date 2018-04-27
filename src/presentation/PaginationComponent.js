import React, { Component } from 'react';

class Pagination extends Component {
	onPageChange(event) {
		let page = Number(event.target.id);
		this.props.onPageChange(page);
	}

	onNextPage() {
		if (this.props.page < 2) {
			this.props.onPageChange(this.props.page + 1);
		}
	}

	onPrevPage() {
		if (this.props.page > 1) {
			this.props.onPageChange(this.props.page - 1);
		}
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

		const prevPage = <div onClick={this.onPrevPage.bind(this)}>prev</div>;
		const nextPage = <div onClick={this.onNextPage.bind(this)}>next</div>;

		return (
			<div>
				{prevPage}
				<ul>{pages}</ul>
				{nextPage}
			</div>
		);
	}
}

export default Pagination;
