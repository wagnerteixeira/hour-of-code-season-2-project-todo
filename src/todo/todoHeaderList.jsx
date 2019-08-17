import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { AddCircle, ListAlt, CheckCircleOutline, Update } from '@material-ui/icons';
import { withRouter } from 'react-router';
import { Grid } from '@material-ui/core';

import WithNavigationIcon from '../navigation/withNavigationIcon';
import TodoIconTyped from './todoIconTyped';

const useStyles = makeStyles({
    card: {
        marginBottom: 30,
        marginTop: 15,
        height: 50,
        color: '#3C4858',
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
});

function TodoHeaderList({ title, type, ...props }) {
    const classes = useStyles({ type });

    function goTo(path) {
        props.history.push(path);
    };   

    return (
        <Card color='inherited' className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Grid container className={classes.gridContainer} direction="row" justify="flex-start" >
                    <TodoIconTyped type={type} />
                    <Grid item>
                        <Typography className={classes.title} variant="h5" component="h2">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Grid container direction="row" justify="flex-end">
                            <WithNavigationIcon className={classes.addCircle} goTo={goTo} goToPath="todo-form" tooltip={'Adicionar tarefa'} >
                                <AddCircle fontSize="large" />
                            </WithNavigationIcon>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            {/*<CardActions>                
            </CardActions>*/}
        </Card>
    )
}

TodoHeaderList.propTypes = {
    tittle: PropTypes.string.isRequired
}

export default withRouter(TodoHeaderList);