/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';

import App from './App'
import Planets from './planets'
import Db from './db'

const root = document.getElementById('root')

render(
	() => (
		<Router>
			<Routes>
				<Route path="/" component={App} />
				<Route path="/planets" component={Planets} />
				<Route path="/db" component={Db} />
			</Routes>
		</Router>
	),
	root
);

