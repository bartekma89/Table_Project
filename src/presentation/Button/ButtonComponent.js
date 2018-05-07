import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ sortBy, sortKey, title }) => {
	return <a onClick={sortBy.bind(this, sortKey)}>{title}</a>;
};

Button.propTypes = {
	sortBy: PropTypes.func.isRequired,
	sortKey: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Button;
