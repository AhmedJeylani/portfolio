import React from 'react';
import { Router, Link } from '@reach/router';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

function App() {
	return (
		<div>
			<NavBar />
			<Router>
				<Home path="/" />
				<Portfolio path="portfolio" />
				<Contact path="contact" />
				<NotFound default />
			</Router>
		</div>
	);
}

export default App;
