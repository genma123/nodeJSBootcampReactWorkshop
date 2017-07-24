import React, { Component } from 'react';
import './App.css';
import {tasksFetchData, tasksAddData, tasksDeleteData} from './actions/tasks';
import TaskList from './TaskList';

class App extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    /* this.updateTask = this.updateTask.bind(this); */
  };
  
 addTask(event) {
	  // Client.add(event, (data) => this.setState({ tasks: this.state.tasks.concat([data]) }));
	  event.preventDefault();
    this.props.addData(tasksAddData(event));
  }
  
  /* updateTask(id, title, selected) {
    this.props.updateData(id, title, selected);
  } */
 
  deleteTask(id) {
    this.props.deleteData(tasksDeleteData(id));
  }

  componentDidMount() {
	  this.props.fetchData(tasksFetchData());
  }

  render() {
    const tasks = this.props.tasks.toJS();
    // console.log("IN render: " + JSON.stringify(tasks, null, 2));
    return (
      <div className="container">
        <h1>MyTaskList</h1>
        <hr/>
        <form className="well" onSubmit={this.addTask}>
          <div className="form-group">
            <input type="text" name="title" className="form-control" placeholder="Add Task..."/>
          </div>
        </form>
        <TaskList tasks={tasks} deleteTask={this.deleteTask} updateTask={this.updateTask} />
      </div>    );
  }
}

export default App;
