import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: 30,
        minHeight: 100,
        background: props => {
            switch (props.type) {
                case 'TODO':
                    return `radial-gradient(${theme.palette.todo.firstColor}, ${theme.palette.todo.secondColor})`;
                case 'DOING':
                    return `radial-gradient(${theme.palette.doing.firstColor}, ${theme.palette.doing.secondColor})`;
                case 'DONE':
                    return `radial-gradient(${theme.palette.done.firstColor}, ${theme.palette.done.secondColor})`;
                default:
                    return `radial-gradient(${theme.palette.common.white}, ${theme.palette.common.white})`;
            }

        },
        color: theme.palette.common.white,
        boxShadow: props => {
            switch (props.type) {
                case 'TODO':
                    return `0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px ${theme.palette.todo.secondColor}`;
                case 'DOING':
                    return `0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px ${theme.palette.doing.secondColor}`;
                case 'DONE':
                    return `0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px ${theme.palette.done.secondColor}`;
                default:
                    return `0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px ${theme.palette.common.white}`;
            }

        },
    },
    pos: {
        marginBottom: 15,
    },
}));

function TodoItem({ title, assignee, type }) {
    const classes = useStyles({ type });
    return (
        <Card className={classes.card}>
            <CardContent >
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