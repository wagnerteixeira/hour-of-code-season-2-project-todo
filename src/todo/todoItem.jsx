import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, IconButton, Tooltip } from '@material-ui/core';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Delete, Edit } from '@material-ui/icons';

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
    iconButton: {        
        color: theme.palette.common.white
    },
}));

function TodoItem({ title, assignee, type }) {
    const classes = useStyles({ type });
    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container direction="row" justify="flex-start">
                    <Grid item>
                        <Typography className={classes.pos} variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {assignee}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Grid container direction="column" alignItems="flex-end">
                            <Tooltip title="Editar">
                                <IconButton aria-label="edit" className={classes.iconButton}>
                                    <Edit fontSize="small" color="inherit" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Deletar">
                                <IconButton aria-label="delete" className={classes.iconButton}>
                                    <Delete fontSize="small" color="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
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