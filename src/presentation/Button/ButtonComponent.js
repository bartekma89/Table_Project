import React from 'react';
import './Button.css';

const Button = ({ sortBy, sortKey, title }) => {
	return <a onClick={sortBy.bind(this, sortKey)}>{title}</a>;
};

export default Button;
