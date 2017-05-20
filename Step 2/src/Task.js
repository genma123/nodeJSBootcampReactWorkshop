import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
	constructor() {
		super();
	}
	
	render() {
		return (<span className="Task"><div className="col-md-1">
            <input name="select" type="checkbox" checked={this.props.selected} />
        </div>  
        <div className="col-md-7">
            {this.props.title}
        </div>
        <div className="col-md-4">
            <input type="button" value="Delete" className="btn btn-danger"/>
        </div>
        <br/><br/></span>);
	}
}

export default Task;