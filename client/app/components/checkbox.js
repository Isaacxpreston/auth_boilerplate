import React from 'react'
import {Link, browserHistory} from 'react-router'
import {checkAuth} from '../utils/check_auth.js'
import Signout from './signout.js'

const CheckBox = React.createClass({
  componentWillMount () {
    checkAuth()
  },

  isChecked () {
    if(!this.refs.box.checked) {
      alert("sorry")
    } else {
      browserHistory.push("/confirmation")
    }
  },

	render() {
    return (
      <div>
        I can check a box
        <input type="checkbox" ref="box" />
        <button onClick={this.isChecked}>next</button>
        <Signout />
      </div>
    )
	}
})

export default CheckBox;