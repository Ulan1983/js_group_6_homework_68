import React, {Component} from 'react';
import {Button, Card, CardBody, CardText} from "reactstrap";
import {removeToDo} from "../../store/actions";
import {connect} from "react-redux";

class Task extends Component {

	state = {
		text: ''
	};

	render () {
		return (
			<div>
				<Card>
					<CardBody>
						<CardText>{this.props.text}</CardText>
						<Button onClick={() => this.props.removeToDo(this.props.id)}>Delete</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeToDo: id => dispatch(removeToDo(id))
	}
};

export default connect(null, mapDispatchToProps)(Task);