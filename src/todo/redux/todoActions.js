import todoService from '../../services/todoService';

import { setLoading } from '../../layout/redux/layoutActions';

export const GET_ALL_TODO = 'todo/GET_ALL_TODO';

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
