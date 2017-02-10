import React from 'react'
import {signUp} from '../utils/signup.js'

const Landing = React.createClass({

  formSignUp (e) {
    e.preventDefault()
    signUp(this.refs.email.value, this.refs.phone.value)
    this.refs.email.value = ""
    this.refs.phone.value = ""
	},

	render() {
    return (
      <div>
        <form onSubmit={this.formSignUp}>
          email
          <input type="text" ref="email"></input>
          phone
          <input type="text" ref="phone"></input>
          <button>sign up</button>
          <br />
          <a href="/api/facebook">FACEBOOK TEST</a>
        </form>
      </div>
    )
	}
})

export default Landing;