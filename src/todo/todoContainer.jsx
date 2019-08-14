import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import TodoList from './todoList';

const todos = [
    {
        title: "Título 1",
        assignee:" User 1"
    },
    {
        title: "Título 2",
        assignee:" User 2"
    },
    {
        title: "Título 3",
        assignee:" User 3"
    }
]

const useStyles = makeStyles({
    container: {
        width: '100%',
    },
});

function TodoContainer(props) {
    const classes = useStyles();
    return (
        <Grid container  direction="row" justify="space-around" className={classes.container} >
            <TodoList headerTitle="A fazer" todos={todos} type="TODO"/>
            <TodoList headerTitle="Fazendo" todos={todos} type="DOING"/>
            <TodoList headerTitle="Feito" todos={todos} type="DONE"/>
        </Grid>
    )
}

export default TodoContainer;