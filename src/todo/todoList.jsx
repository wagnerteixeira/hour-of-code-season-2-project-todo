import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import TodoItem from './todoItem';

const useStyles = makeStyles({
    container: {
      width: '33%'
    },
});

function TodoList(props) {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="space-evenly" className={classes.container}>
            <TodoItem title="Teste 1" assignee="User 1"/>
            <TodoItem title="Teste 2" assignee="User 2"/>
            <TodoItem title="Teste 3" assignee="User 3"/>
        </Grid>
    )
}


export default TodoList;