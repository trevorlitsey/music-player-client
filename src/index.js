import React from 'react';
import ReactDOM from 'react-dom';
import {
	ApolloClient,
	createNetworkInterface,
	ApolloProvider,
} from 'react-apollo';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

const networkInterface = createNetworkInterface({
	uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
	networkInterface,
});

const App = (
	<ApolloProvider client={client}>
		<Routes />
	</ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
