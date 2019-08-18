import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { AddCircle } from '@material-ui/icons';
import { withRouter } from 'react-router';
import { Grid } from '@material-ui/core';

import WithNavigationIcon from '../navigation/withNavigationIcon';
import TodoIconTyped from './todoIconTyped';

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: 30,
        marginTop: 15,
        height: 50,
        color: theme.palette.appBar,
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.14)',
    },
    cardContent: {
        paddingTop: 7,
    },
    gridContainer: {
        height: 30
    },
    title: {
        marginTop: 2,
        marginLeft: 20,
        fontWeight: 500,
    },
    addCircle: {
        padding: 0
    }
}));

function TodoHeaderList({ title, status, goTo, ...props }) {
    const classes = useStyles({ status });

    const internalGoTo = status => path => {
        let state = {
            action: 'ADD',
            status: status 
        };
        goTo(path, state)
    };   

    return (
        <Card color='inherited' className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Grid container className={classes.gridContainer} direction="row" justify="flex-start" >
                    <TodoIconTyped status={status} />
                    <Grid item>
                        <Typography className={classes.title} variant="h5" component="h2">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Grid container direction="row" justify="flex-end">
                            <WithNavigationIcon className={classes.addCircle} goTo={internalGoTo(status)} goToPath="todo-form" tooltip={'Adicionar tarefa'} >
                                <AddCircle fontSize="large" />
                            </WithNavigationIcon>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

TodoHeaderList.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    goTo: PropTypes.func.isRequired,
}

export default withRouter(TodoHeaderList);