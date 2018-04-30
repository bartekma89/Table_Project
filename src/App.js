import React from 'react';
import ContainerTable from './container/ContainerTable';
import './App.css';
import Header from './presentation/Header/HeaderLogo';
import Footer from './presentation/Footer/Footer';

const App = () => {
	return (
		<div className="container">
			<Header />
			<ContainerTable />
			<Footer />
		</div>
	);
};

export default App;
