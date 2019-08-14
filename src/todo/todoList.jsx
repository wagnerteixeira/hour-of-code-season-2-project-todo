import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import TodoItem from './todoItem';
import TodoHeaderList from './todoHeaderList';

const useStyles = makeStyles({
    container: {
        width: '31%'
    },
});


function TodoList({ todos, headerTitle, type }) {
    const classes = useStyles({ type });
    function mapTodos() {
        if ((!todos) || (!todos.length))
            return <Typography align="center">Não existem tarefas</Typography>;
        else
            return todos.map(todo => <TodoItem title={todo.title} assignee={todo.assignee} type={type} />);
    }
    return (
        <Grid container direction="column" justify="flex-start" className={classes.container}>
            <TodoHeaderList title={headerTitle} type={type} />
            {mapTodos()}
        </Grid>
    )
}


export default TodoList;