import {INCREMENT, DECREMENT, ADD, SUBTRACT, FETCH_COUNTER_SUCCESS, FETCH_TO_DO_LIST_SUCCESS} from "./actions";

const initialState = {
	counter: 0,
	tasks: null,
	newTask: ''
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case INCREMENT:
			return {...state, counter: state.counter + 1};
		case DECREMENT:
			return {...state, counter: state.counter - 1};
		case ADD:
			return {...state, counter: state.counter + action.amount};
		case SUBTRACT:
			return {...state, counter: state.counter - action.amount};
		case FETCH_COUNTER_SUCCESS:
			return {...state, counter: action.counter};
		case FETCH_TO_DO_LIST_SUCCESS:
			return {...state, tasks: action.tasks};
		default:
			return state
	}
};

export default reducer;