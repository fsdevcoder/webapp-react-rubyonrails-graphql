import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import api from '../../../services/api.js'

import './Task.css'

class Task extends Component {

	async handleDelete(id) {
		await api.delete(`/tasks/${id}`)
			.then(response => this.props.getTasks())
			.catch(error => console.log(`Erro ao deletar o registro: ${error}`))
	}

	async handleCompleteTask(task) {
		task.done = true

		await api.put(`/tasks/${task.id}`, task)
			.then(response => this.props.getTasks())
			.catch(error => console.log(`Erro ao atualizar o registro: ${error}`))
	}

	handlerTask(task) {
		return (
			<div className="task-item" >
				<p className="title">{ task.title }</p>

				<div className="task-actions">
					{ task.done === false && (
						<FontAwesomeIcon 
							icon="check-circle" 
							className="task-complete task-icon-action" 
							onClick={ () => this.handleCompleteTask(task) }
						/>
					)
					}					
					<FontAwesomeIcon 
						icon="trash-alt" 
						className="task-delete task-icon-action" 
						onClick={ () => this.handleDelete(task.id) }
					/>
					
				</div>
			</div>
		)
	}

	render() {
		return (
			this.handlerTask(this.props.task)
		)
	}
}

export default Task