import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import Client from './Client';

class App extends Component {
	// NOTE this is the only "stateful" component.
  constructor() {
    super();
    this.state = {
  		tasks: []
    };
  };

  //Use of arrow functions keeps "this" in scope.
  retrieveTasks() {
	  Client.retrieve((data) => this.setState({ tasks: data.sort() }));
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
        <form className="well">
          <div className="form-group">
            <input type="text" name="title" className="form-control" placeholder="Add Task..."/>
          </div>
        </form>
        <TaskList tasks={this.state.tasks} />
      </div>    );
  }
}

export default App;
