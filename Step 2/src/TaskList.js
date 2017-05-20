import React, { Component } from 'react'; // React must be in scope when using JSX
import Task from './Task';
import './TaskList.css';

class TaskList extends Component {	

	render() {
		// NOTE task.isDone can be undefined, so forcing the prop to be either true or false prevents
		// a "switch from uncontrolled to controlled" warning
		const tasks = this.props.tasks.map((task) =>
			<Task key={task._id} id={task._id} title={task.title} selected={task.isDone ? true : false} />);
		return (
			<div className="TaskList">
			{tasks}
			</div>
		);
	}
}

export default TaskList;