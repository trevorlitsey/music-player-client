import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Upload from './Upload';
import NotFound from './NotFound';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/upload" exact component={Upload} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);
