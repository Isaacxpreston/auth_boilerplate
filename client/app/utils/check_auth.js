import axios from 'axios';
import {Link, browserHistory} from 'react-router'

export function checkAuth () {
  return axios.get('/api/isAuthenticated')
	.then((res) => {
    console.log("auth status", res.data)
  })
}

