import React, {Component} from 'react';
import {connect} from 'react-redux';
import TaskForm from "../components/TaskForm/TaskForm";
import './Tasks.css';
import Task from "../components/Task/Task";
import {fetchToDoList} from "../store/actions";

class Tasks extends Component {

componentDidMount() {
	this.props.fetchToDoList();
}

	render() {
		return (
			<div className="tasks">
				<TaskForm/>
				{this.props.tasks ? Object.keys(this.props.tasks).map(id => {
					return (
						<Task
							key={id}
							text={this.props.tasks[id].text}
							id={id}
						/>
					)
				}) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.tasks,
		newTask: state.newTask
	}
};
const mapDispatchToProps = dispatch => {
	return {
		fetchToDoList: data => dispatch(fetchToDoList(data))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);