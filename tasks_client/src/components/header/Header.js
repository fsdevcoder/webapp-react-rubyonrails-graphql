import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css'

class Header extends Component {
	render() {
		return (
			<div className="main-header">
				<FontAwesomeIcon icon="check-circle" size="lg"/> 
				<span className="title">Task Finisher</span>
			</div>
		)
	}
}

export default Header
