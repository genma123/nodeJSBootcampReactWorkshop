import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
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
		</div>    );
  }
}

export default App;
