import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import Client from './Client';
import _ from 'lodash';

class App extends Component {
	// NOTE this is the only "stateful" component.
  constructor() {
    super();
    this.state = {
  		tasks: []
    };
	
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  };

  //Use of arrow functions keeps "this" in scope.
  retrieveTasks() {
	  Client.retrieve((data) => this.setState({ tasks: data.sort() }));
  }
  
  addTask(event) {
	  Client.add(event, (data) => this.setState({ tasks: this.state.tasks.concat([data]) }));
	  event.preventDefault();
  }
  
  updateTask(id, title, selected) {
	  var newSelected = !selected;
	  Client.update(id, title, newSelected, (data) => {
		  var tasks = this.state.tasks;
		  // console.log("found: " + JSON.stringify(_(tasks).find({ "_id": id })));
		  _(tasks).find({ "_id": id }).isDone = newSelected;
		  this.setState({ tasks: tasks });
	  });
  }
  
  deleteTask(id) {
	  Client.remove(id, (data) => {
		  this.setState({ tasks: _.filter(this.state.tasks, function(t) { return t._id !== id; }) });
	  });
  }
  
  componentWillMount() {
	   console.log("In componentWillMount");
	  this.retrieveTasks();
  }

  render() {
    return (
      <div className="container">
        <h1>MyTaskList</h1>
        <hr/>
        <form className="well" onSubmit={this.addTask}>
          <div className="form-group">
            <input type="text" name="title" className="form-control" placeholder="Add Task..."/>
          </div>
        </form>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} updateTask={this.updateTask} />
      </div>    );
  }
}

export default App;
