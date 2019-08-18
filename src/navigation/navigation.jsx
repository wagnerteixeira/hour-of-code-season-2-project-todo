import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

import BackTodo from './backTodo';

const useStyles = makeStyles({
    container: {
        width: 120,
    },
});

function Navigation(props) {
    const classes = useStyles();
    function goTo(path) {
        props.history.push(path);
    };
    return (
        <Grid container direction="row" justify="flex-end" className={classes.container}>
           {props.location.pathname !== '/' && <BackTodo goTo={goTo} />}
        </Grid>
    );
}

export default withRouter(Navigation);