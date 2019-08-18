import _ from 'lodash';
import { GET_ALL_TODO } from './todoActions';

const INITIAL_STATE = {
    todoList: [],
    doingList: [],
    doneList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_TODO: {
            const groupTodos = _.groupBy(action.payload, "status");
            const todoList = groupTodos["TODO"] || [];
            const doingList = groupTodos["DOING"] || [];
            const doneList = groupTodos["DONE"] || [];
            return { ...state, todoList, doingList, doneList };
        }
        default:
            return state;
    }
};

