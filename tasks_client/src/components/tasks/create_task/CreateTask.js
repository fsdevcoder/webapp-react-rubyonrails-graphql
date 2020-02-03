import React, { Component } from 'react'
import api from '../../../services/api.js'

import './CreateTask.css'

class CreateTask extends Component {
	state = {
		task: {
			title: '',
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


	handleChange(event) {
		const element = event.target
		const task = this.state.task

		if (element.name === 'title') task.title = element.value
		if (element.name === 'done') task.done = element.checked

		this.setState({ task })
	}

	modal = () => {
		if (this.state.show) {
			this.setState({ show: false })
		} 
		else {
			const titleElement = document.getElementById('titleElement')
			const doneElement = document.getElementById('doneElement')

			titleElement.value = ''
			doneElement.checked = false

			this.setState({ task: { title: '', done: false}, show: true })
		}
	}

	render() {
		return (
			<div>
				<div className={`create-task ${ this.state.show ? 'open-modal' : 'close-modal' }`}>
					<form>
						<p>Place a title task</p>
						<input 
							type="text" 
							name="title"
							onChange={ event => this.handleChange(event) }
							placeholder="It's my task"
							id="titleElement"
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