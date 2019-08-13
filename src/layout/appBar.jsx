import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Navigation from '../navigation/navigation';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function SimpleAppBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h6" color="inherit">
                            Todo List
          </Typography>
                        <Navigation />
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}