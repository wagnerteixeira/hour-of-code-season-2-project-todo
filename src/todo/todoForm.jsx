import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoIconTyped from './todoIconTyped';
import { Grid, TextField, Fab, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Save, Cancel } from '@material-ui/icons';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setLoading } from '../layout/redux/layoutActions';
import { getAllTodo } from '../todo/redux/todoActions';
import { withRouter } from 'react-router';
import MessageSnackbar from '../utils/MessageSnackbar';
import WithLoading from '../layout/withLoading';

import todoService from '../services/todoService';


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
    gridItemSelect: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    fab: {
        margin: theme.spacing(1),
    },
}));

function TodoForm(props) {
    let _status = 'TODO';
    let _title = '';
    let _description = '';
    let _assignee = '';
    let id = '';    
    if (props.location.state) {
        _status = props.location.state.status || 'TODO';
        if (props.location.state.action === "EDIT") {
            _title = props.location.state.title ||'';
            _description = props.location.state.description ||'';
            _assignee = props.location.state.assignee || '';
            id = props.location.state.id || ''
        }
    }
    const [title, setTitle] = useState(_title);
    const [description, setDescription] = useState(_description);
    const [assignee, setAssignee] = useState(_assignee);  
    const [status, setStatus] = useState(_status);
    const [message, setMessage] = useState({
        messageOpen: false,
        variantMessage: 'success',
        messageText: ''
    });
    const classes = useStyles({ status });
    async function saveTodo() {
        if (!validateTodo())
            return;
        let todo = {
            title,
            description,
            assignee,
            status
        };
        props.setLoading();
        if (id)
            await todoService.update({ ...todo, id });
        else
            await todoService.add(todo);
        props.setLoading();
        props.history.push('/');
    }

    function validateTodo() {
        let message = "";
        if (title.trim() === "") {
            message = "Infome o título!"
        }
        else if (description.trim() === "") {
            message = "Infome a descrição!"
        }
        else if (assignee.trim() === "") {
            message = "Infome o responsável!"
        }

        if (message !== "") {
            setMessage({
                messageOpen: true,
                messageText: message,
                variantMessage: 'warning'
            })
            return false;
        }
        else
            return true;

    }
    return (
        <React.Fragment>
            <MessageSnackbar
                onClose={() => setMessage({ ...message, messageOpen: false })}
                open={message.messageOpen}
                variant={message.variantMessage}
                message={message.messageText}
            />
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
                    <TodoIconTyped status={status} color="inherit" />

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
                    <Fab onClick={saveTodo} aria-label="save" color="primary" className={classes.fab}>
                        <Save />
                    </Fab>
                    <Fab onClick={() => props.history.push('/')} aria-label="cancel" color="secondary" className={classes.fab}>
                        <Cancel />
                    </Fab>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapDispatchToProps = {
    getAllTodo,
    setLoading
}

export default
    compose(
        withRouter,
        WithLoading,
        connect(
            null,
            mapDispatchToProps
        ))(TodoForm);