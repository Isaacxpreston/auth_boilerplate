import React from 'react'
import {render} from 'react-dom'
import {Router, Link, browserHistory, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import './stylesheets/stylesheet.css'
import store, {history} from './store.js'
import MainWrapper from './components/mainwrapper.js'
import Landing from './components/landing.js'
import CheckBox from './components/checkbox.js'
import Confirmation from './components/confirmation.js'

const Root = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={MainWrapper}>
				<IndexRoute component={Landing}></IndexRoute>
				<Route path='/signup' component={Landing} />
				<Route path='/checkbox' component={CheckBox} />
				<Route path='/confirmation' component={Confirmation} />
			</Route>
		</Router>
	</Provider>
)

render(Root, document.getElementById('app'))