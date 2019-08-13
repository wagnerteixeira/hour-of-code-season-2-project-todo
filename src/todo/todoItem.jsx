import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        marginBottom: 2,
        minHeight: 150,
    },
    pos: {
        marginBottom: 15,
    },
});

function TodoItem({ title, assignee }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.pos} variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    {assignee}
                </Typography>
            </CardContent>
            {/*<CardActions>                
            </CardActions>*/}
        </Card>
    )
}

TodoItem.propTypes = {
    tittle: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired
}

export default TodoItem