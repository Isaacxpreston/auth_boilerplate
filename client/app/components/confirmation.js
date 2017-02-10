import React from 'react'
import {checkAuth} from '../utils/check_auth.js'
import Signout from './signout.js'

const Confirmation = React.createClass({
  componentWillMount () {
    checkAuth()
  },

	render() {
    return (
      <div>
        CONFIRMED
        <Signout />
      </div>
    )
	}
})

export default Confirmation;