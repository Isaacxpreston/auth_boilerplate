import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {signUp} from '../actions/actions.js'

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
				<h1>auth boilerplate</h1>
				{ React.cloneElement(this.props.children, this.props) }
			</div>
		)
	}
})

function mapStatetoProps (state=[]) {
	return {
		simpleReducer: state.simpleReducer,
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;