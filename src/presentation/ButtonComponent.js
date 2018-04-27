import React from 'react';

const Button = ({ sortBy, sortKey, title }) => {
	return <button onClick={sortBy.bind(this, sortKey)}>{title}</button>;
};

export default Button;
