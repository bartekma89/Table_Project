import React from 'react';
import ContainerTable from './container/ContainerTable';
import DevTools from './DevTools';
import './App.css';
import Header from './presentation/Header/HeaderLogo';
import Footer from './presentation/Footer/Footer';

const App = () => {
	return (
		<div className="container">
			<Header />
			<ContainerTable />
			<Footer />
			{/*<DevTools />*/}
		</div>
	);
};

export default App;
