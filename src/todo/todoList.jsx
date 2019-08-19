import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withRouter } from 'react-router';

import TodoItem from './todoItem';
import TodoHeaderList from './todoHeaderList';

function TodoList({ todos, headerTitle, status, ...props }) {
     function goTo(path, state) {
        props.history.push(path, state);
    };   

    function mapTodos() {
        if ((!todos) || (!todos.length))
            return <Typography align="center">Não existem tarefas</Typography>;
        else
            return todos.map(todo => <TodoItem  goTo={goTo} key={todo.id} todo={todo} />);
    }
    return (
        <Grid container direction="column" justify="flex-start">
            <TodoHeaderList title={headerTitle} status={status} goTo={goTo} />
            {mapTodos()}
        </Grid>
    )
}


export default withRouter(TodoList);