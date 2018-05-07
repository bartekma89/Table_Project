import React, { Component } from 'react';
import classNames from 'classnames';
import './Pagination.css';
import PropTypes from 'prop-types';

class Pagination extends Component {
	static propTypes = {
		startPage: PropTypes.number.isRequired,
		page: PropTypes.number.isRequired,
		quantityPages: PropTypes.number.isRequired,
		onPageChange: PropTypes.func.isRequired,
	};

	onPageChange(event) {
		let page = Number(event.target.value);
		this.props.onPageChange(page);
	}

	onNextPage() {
		if (this.props.page < this.props.quantityPages) {
			this.props.onPageChange(this.props.page + 1);
		}
	}

	onBackPage() {
		if (this.props.page > 1) {
			this.props.onPageChange(this.props.page - 1);
		}
	}

	render() {
		const pages = [];

		for (let i = this.props.startPage; i <= this.props.quantityPages; i++) {
			pages.push(
				<li
					className={classNames('pagination-item', {
						active: i === this.props.page,
					})}
					key={i}
					onClick={this.onPageChange.bind(this)}
					value={i}
				>
					{i}
				</li>
			);
		}

		const prevPage = (
			<div className="arrow-prev" onClick={this.onBackPage.bind(this)}>
				back
			</div>
		);
		const nextPage = (
			<div className="arrow-next" onClick={this.onNextPage.bind(this)}>
				next
			</div>
		);

		return (
			<div className="pagination">
				{prevPage}
				<ul className="pagination-list">{pages}</ul>
				{nextPage}
			</div>
		);
	}
}

export default Pagination;
