import axios from 'axios';
import {Link, browserHistory} from 'react-router'

export function checkAuth () {
  return axios.get('/api/isAuthenticated')
	.then((res) => {
    if (res.data === "authorized") {
      console.log("authorized")
      return "authorized"
    } else {
      browserHistory.push("/")
      return "unauthorized"
    }
  })
}

