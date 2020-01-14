import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {sendToDo} from "../../store/actions";

class TaskForm extends Component {
	 state = {
	 	text: ''
	 };

	 inputChanged = event => this.setState({[event.target.name]: event.target.value});

	 submitToDo = e => {
	 	e.preventDefault();
	 	this.props.sendToDo(this.state);
	 };

	render () {
		return (
			<Form onSubmit={this.submitToDo}>
				<FormGroup>
					<Label for="text">Add task</Label>
					<Input type="text" name="text" id="text" onChange={this.inputChanged}/>
				</FormGroup>
				<Button type='submit'>Save</Button>
			</Form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		sendToDo: data => dispatch(sendToDo(data))
	}
};

export default connect(null, mapDispatchToProps)(TaskForm);