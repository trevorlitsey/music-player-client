import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

const store = createStore(
	rootReducer,
	{ data: { songs: {} } },
	applyMiddleware(thunk)
);

const App = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
