import React from 'react'
import {signUp, signIn} from '../utils/signup.js'
import {checkFacebookAuth, checkLocalAuth} from '../utils/check_auth.js'

const Landing = React.createClass({

  componentWillMount () {
    checkFacebookAuth()
    checkLocalAuth()
  },

  formSignUp (e) {
    e.preventDefault()
    signUp(this.refs.email.value, this.refs.phone.value)
    this.refs.email.value = ""
    this.refs.phone.value = ""
	},

  formSignIn (e) {
    e.preventDefault()
    signIn(this.refs.signin_email.value, this.refs.signin_phone.value)
    this.refs.signin_email.value = ""
    this.refs.signin_phone.value = ""
	},

	render() {
    return (
      <div>
        <p>sign up</p>
        <form onSubmit={this.formSignUp}>
          email
          <input type="text" ref="email"></input>
          phone
          <input type="text" ref="phone"></input>
          <button>sign up</button>
        </form>

        <p>sign in</p>
        <form onSubmit={this.formSignIn}>
          email
          <input type="text" ref="signin_email"></input>
          phone
          <input type="text" ref="signin_phone"></input>
          <button>sign up</button>
        </form>

        <br />
        <a href="/api/facebook">sign up/sign in with facebook</a>
      </div>
    )
	}
})

export default Landing;