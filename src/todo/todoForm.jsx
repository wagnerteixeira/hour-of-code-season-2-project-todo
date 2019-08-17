import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TodoIconTyped from './todoIconTyped';
import { Grid, TextField, Fab, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Save, Cancel } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    container: {
        width: '80vw',
        marginLeft: '10vw',
        marginTop: 60,
        background: '#FFF',
        borderRadius: 6,
        border: 0,
        minWidth: 0,
        minHeight: 150,
        position: 'relative',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    iconContainer: {
        color: theme.palette.common.white,
        marginTop: -20,
        borderRadius: 4,
        marginTop: -30,
        padding: 20,
        marginLeft: 30,
        width: 80,
        height: 80,
        background: props => {
            switch (props.status) {
                case 'TODO':
                    return `radial-gradient(${theme.palette.todo.firstColor}, ${theme.palette.todo.secondColor})`;
                case 'DOING':
                    return `radial-gradient(${theme.palette.doing.firstColor}, ${theme.palette.doing.secondColor})`;
                case 'DONE':
                    return `radial-gradient(${theme.palette.done.firstColor}, ${theme.palette.done.secondColor})`;
                default:
                    return `radial-gradient(${theme.palette.common.white}, ${theme.palette.common.white})`;
            }
        }
    },
    gridItem: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(3),
    },
    gridItemButton: {
        padding: theme.spacing(2),
    },
    gridItemSelect:{
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    fab: {
        margin: theme.spacing(1),
    },
}));

function TodoForm() {    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [status, setStatus] = useState('TODO');
    console.log(status);    
    const classes = useStyles({ status });
    return (
        <Grid
            container
            direction="column"
            className={classes.container}
        >
            <Grid
                className={classes.iconContainer}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <TodoIconTyped type={status} color="inherit" />

            </Grid>
            <Grid item className={classes.gridItem}>
                <TextField
                    id="title"
                    label="Título"
                    fullWidth
                    className={classes.textField}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                />
            </Grid>
            <Grid item className={classes.gridItem}>
                <TextField
                    id="description"
                    label="Descrição"
                    multiline
                    fullWidth
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    defaultValue="Descrição"
                    className={classes.textField}
                    margin="normal"
                />
            </Grid>
            <Grid item className={classes.gridItem}>
                <TextField
                    id="assignee"
                    label="Responsável"
                    className={classes.textField}
                    value={assignee}
                    fullWidth
                    onChange={(e) => setAssignee(e.target.value)}
                    margin="normal"
                />
            </Grid>
            <Grid item className={classes.gridItemSelect}>
                <InputLabel htmlFor="status">Status</InputLabel>
                <Select
                    fullWidth                    
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    inputProps={{
                        name: 'status',
                        id: 'status',
                    }}
                >
                    <MenuItem value={'TODO'}>A Fazer</MenuItem>
                    <MenuItem value={'DOING'}>Fazendo</MenuItem>
                    <MenuItem value={'DONE'}>Feito</MenuItem>
                </Select>
            </Grid>
            <Grid item className={classes.gridItemButton}>
                <Fab aria-label="save" color="primary" className={classes.fab}>
                    <Save />
                </Fab>
                <Fab aria-label="cancel" color="secondary" className={classes.fab}>
                    <Cancel />
                </Fab>
            </Grid>
        </Grid>
    )
}

TodoForm.propTypes = {
    type: PropTypes.string.isRequired
}

export default TodoForm