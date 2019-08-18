import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import WithLoading from '../layout/withLoading';
import TodoList from './todoList';



const useStyles = makeStyles({
    container: {
        width: '100%',
    },
});

function TodoContainer({ todoList, doingList, doneList }) {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="space-around" className={classes.container} >
            <TodoList headerTitle="A fazer" todos={todoList} status="TODO" />
            <TodoList headerTitle="Fazendo" todos={doingList} status="DOING" />
            <TodoList headerTitle="Feito" todos={doneList} status="DONE" />
        </Grid>
    )
}

TodoContainer.propTypes = {
    todoList: PropTypes.array.isRequired,
    doingList: PropTypes.array.isRequired,
    doneList: PropTypes.array.isRequired
}

export default WithLoading(TodoContainer);