import axios from 'axios';
import {Link, browserHistory} from 'react-router'


//only need one
export function checkFacebookAuth () {
  return axios.get('/api/isFacebookAuthenticated')
	.then((facebook) => {
    console.log("facebook status", facebook.data)
  })
}

export function checkLocalAuth () {
  return axios.get('/api/isLocalAuthenticated')
	.then((local) => {
    console.log("local status", local.data)
  })
}

