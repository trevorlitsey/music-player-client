import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

const App = <Routes />;

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
