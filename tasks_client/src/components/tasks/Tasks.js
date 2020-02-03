import React, { Component } from 'react'
import api from '../../services/api.js'

import './Tasks.css'
import Task from './task/Task.js'
import CreateTask from './create_task/CreateTask.js'


class Tasks extends Component {

	constructor(props){
		super(props)
		this.getTasks = this.getTasks.bind(this)
	}

	state = {
		tasksDone: [],
		tasksTodo: []
	}

	componentDidMount() {
		this.getTasks()
	}

	async getTasks(){
		const response = await api.get('/tasks')
		
		const tasksTodo = response.data.filter(item => !item.done && item)
		const tasksDone = response.data.filter(item => item.done && item)

		this.setState({ tasksDone, tasksTodo })
	}

	handlerTaskListDone = () => {
		const response = this.state.tasksDone.map(item => (
			<Task task={item} key={item.id} getTasks={ this.getTasks } />
		))

		return response
	}

	handlerTaskListTodo = () => {
		const response = this.state.tasksTodo.map(item => (
			<Task task={item} key={item.id} getTasks={ this.getTasks } />
		))

		return response
	}

	render() {
		return (
			<div className="tasks-list">
				<CreateTask getTasks={ this.getTasks } />

				<br /> <br />

				<div className="group-list">
					<p className="group-title">To-do</p>
					{ this.handlerTaskListTodo() }
				</div>

				<div className="group-list">
					<p className="group-title">Done</p>
					{ this.handlerTaskListDone() }
				</div>
			</div>
		)
	}
}

export default Tasks