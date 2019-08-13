import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import TodoList from './todoList';


const useStyles = makeStyles({
    container: {
        width: '100%',
    },
});

function TodoContainer(props) {
    const classes = useStyles();
    return (
        <Grid container  direction="row" justify="space-evenly" className={classes.container} >
            <TodoList />
            <TodoList />
            <TodoList />
        </Grid>
    )
}

export default TodoContainer;