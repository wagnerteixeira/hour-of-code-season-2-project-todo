import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoContainer from './todoContainer';

import { getAllTodo } from './redux/todoActions';

function TodoPage({ getAllTodo, ...props }) {
    useEffect(() => {
        getAllTodo();
        // eslint-disable-next-line 
    }, [])

    return (
        <TodoContainer
            todoList={props.todoList}
            doingList={props.doingList}
            doneList={props.doneList}
        />
    )
}

const mapStateToProps = ({ todo }) => {
    return {
        todoList: todo.todoList,
        doingList: todo.doingList,
        doneList: todo.doneList
    };
};

const mapDispatchToProps = {
    getAllTodo
}

export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TodoPage);