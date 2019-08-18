import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import WithLoading from '../layout/withLoading';
import TodoList from './todoList';



const useStyles = makeStyles( theme => ({
    container: {
        width: '100%',
        marginLeft: theme.spacing(0.05)
    },
}));

function TodoContainer({ todoList, doingList, doneList }) {
    const classes = useStyles();

    return (
        <Grid container spacing={3} direction="row" justify="space-around" className={classes.container} >
            <Grid item xs={12} sm={12} md={4}>
                <TodoList headerTitle="A fazer" todos={todoList} status="TODO" />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <TodoList headerTitle="Fazendo" todos={doingList} status="DOING" />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <TodoList headerTitle="Feito" todos={doneList} status="DONE" />
            </Grid>
        </Grid>
    )
}

TodoContainer.propTypes = {
    todoList: PropTypes.array.isRequired,
    doingList: PropTypes.array.isRequired,
    doneList: PropTypes.array.isRequired
}

export default WithLoading(TodoContainer);