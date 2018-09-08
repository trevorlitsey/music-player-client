import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AllSongs from './AllSongs';
import Upload from './Upload';
import NotFound from './NotFound';
import Account from './Account';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={AllSongs} />
			<Route path="/upload" exact component={Upload} />
			<Route path="/account" exact component={Account} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);
