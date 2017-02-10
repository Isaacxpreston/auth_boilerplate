import React from 'react'
import {checkAuth} from '../utils/check_auth.js'
import axios from 'axios';
import {Link, browserHistory} from 'react-router'

const Signout = React.createClass({
  signOut () {
    axios.get('/api/signout')
    browserHistory.push('/')
  },

	render() {
    return (
      <div>
        <button onClick={this.signOut}>sign out</button>
      </div>
    )
	}
})

export default Signout;