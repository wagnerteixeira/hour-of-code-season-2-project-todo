import React from 'react';
import AppBar from './layout/appBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import TodoContainer from './todo/todoContainer';
import TodoForm from './todo/todoForm';

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d47a1',
    },
    secondary: {
      main: '#c62828'
    },
    todo: {
      firstColor: '#66bb6a',
      secondColor: '#43a047'
    },
    doing:{
      firstColor: '#26c6da',
      secondColor: '#00acc1', 
    },    
    done: {
      firstColor: '#ffa726',
      secondColor: '#fb8c00', 
      
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route exact path="/" component={TodoContainer} />
          <Route exact path="/todo-form" component={TodoForm} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
