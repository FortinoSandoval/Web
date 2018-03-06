//dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//Routes
import AppRouter from './routes'

//assets
import './index.css';


render(
	<Router>
		<AppRouter />
	</Router>,
	document.getElementById('root'));
registerServiceWorker();
