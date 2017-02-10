import axios from 'axios';
import {Link, browserHistory} from 'react-router'

export function signUp (email, phone) {
  return axios.post('/api/signup', {
		email,
		phone
	})
	.then((resp) => {
		console.log("signed up")
		// browserHistory.push("/checkbox")
  })
}

export function signIn (email, phone) {
  return axios.post('/api/signin', {
		email,
		phone
	})
	.then((resp) => {
		console.log("logged in")
		// browserHistory.push("/checkbox")
  })
}