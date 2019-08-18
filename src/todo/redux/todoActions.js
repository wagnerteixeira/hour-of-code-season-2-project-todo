import todoService from '../../services/todoService';

import { setLoading } from '../../layout/redux/layoutActions';

export const GET_TODO = 'todo/GET_TODO';
export const GET_ALL_TODO = 'todo/GET_ALL_TODO';
export const ADD_TODO = 'todo/ADD_TODO';
export const UPDATE_TODO = 'todo/UPDATE_TODO';
export const REMOVE_TODO = 'todo/REMOVE_TODO';

export const getTodo = (id) => {
    const todo = todoService.get(id);
    return {
        type: GET_TODO,
        payload: todo
    };
}

export const getAllTodo = () => {
    return async dispatch => {
        dispatch(setLoading())
        const todos = await todoService.getAll();
        dispatch({
            type: GET_ALL_TODO,
            payload: todos
        });
        dispatch(setLoading())
    };
}

export const addTodo = (todo) => {
    const todoAdded = todoService.add(todo);
    return {
        type: ADD_TODO,
        payload: todoAdded
    };
}

export const updateTodo = (todo) => {
    const todoUpdated = todoService.update(todo);
    return {
        type: UPDATE_TODO,
        payload: todoUpdated
    };
}

export const removeTodo = (todo) => {
    const idTodo = todoService.remove(todo)
    return {
        type: REMOVE_TODO,
        payload: idTodo
    };
}