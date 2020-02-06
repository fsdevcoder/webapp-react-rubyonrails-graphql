import React, { Component } from 'react'
import api from '../../../services/api.js'
import onClickOutside from "react-onclickoutside";

import './CreateTask.css'

class CreateTask extends Component {
	state = {
		task: {
			title: '',
			desc: '',
			done: false,	
		},

		show: false
	}

	handleSubmit(event) {
		event.preventDefault()
		const show = !this.state.show

		this.setState({ show })
		api.post('/tasks', this.state.task)
			.then( response => this.props.getTasks() )
			.catch( error => console.log('Erro ao inserir: ' + error) )
	}

	constructor(props) {
		super(props);
	
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	  }
	
	  componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	  }
	
	  componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	  }
	
	  /**
	   * Set the wrapper ref
	   */
	  setWrapperRef(node) {
		this.wrapperRef = node;
	  }
	
	  /**
	   * Alert if clicked on outside of element
	   */
	  handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			if(this.state.show){
				this.setState({show:false})
			}
		//   alert('You clicked outside of me!');
		}
	  }


	handleChange(event) {
		const element = event.target
		const task = this.state.task

		if (element.name === 'title') task.title = element.value
		if (element.name === 'desc') task.desc = element.value
		if (element.name === 'done') task.done = element.checked

		this.setState({ task })
	}

	modal = () => {
		if (this.state.show) {
			this.setState({ show: false })
		} 
		else {
			const titleElement = document.getElementById('titleElement')
			const descElement = document.getElementById('descElement')
			const doneElement = document.getElementById('doneElement')

			titleElement.value = ''
			descElement.value = ''
			doneElement.checked = false

			this.setState({ task: { title: '', desc: '', done: false}, show: true })
		}
	}

	render() {
		return (
			<div>
				<div className={`create-task ${ this.state.show ? 'open-modal' : 'close-modal' }`}>
					<form ref={this.setWrapperRef}>
						<p>Place a title task</p>
						<input 
							type="text" 
							name="title"
							onChange={ event => this.handleChange(event) }
							placeholder="It's my task"
							id="titleElement"
						/>
						<input 
							type="text" 
							name="desc"
							onChange={ event => this.handleChange(event) }
							placeholder="It's my description"
							id="descElement"
						/>

						<p>
							<input
								type="checkbox"
								name="done"
								onChange={ event => this.handleChange(event) }
								id="doneElement"
							/>
							Done
						</p>

						<button 
							type="submit" 
							className="submit-button" 
							onClick={ event => this.handleSubmit(event) }
						> 
							Create Task
						</button>
					</form>
				</div>

				<button className="add-task-button" onClick={ this.modal }>ADD TASK</button>
			</div>
		)
	}
}

export default CreateTask