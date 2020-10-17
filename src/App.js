import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Header from './components/Header';

import {
	Home,
	Profile
} from './routes/'

function App() {
	return (
		<Router >
			<Header />
			<main className="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/profile/:id" component={Profile} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
