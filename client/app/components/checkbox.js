import React from 'react'
import {Link, browserHistory} from 'react-router'

const CheckBox = React.createClass({
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
      </div>
    )
	}
})

export default CheckBox;