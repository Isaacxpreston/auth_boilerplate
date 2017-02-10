import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {signUp} from '../actions/actions.js'

import Landing from "./landing.js"

const Main = React.createClass({

	someAction () {
		this.props.dispatch(someAction())
	},
	
	signUp () {
		this.props.dispatch(signUp())
	},

	render() {
		return (
			<div>
				<h1>aksdfkajsdf</h1>
				{ React.cloneElement(this.props.children, this.props) }
			</div>
		)
	}
})

function mapStatetoProps (state=[]) {
	return {
		iconsReducer: state.iconsReducer,
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;