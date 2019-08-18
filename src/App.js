import React from 'react';
import AppBar from './layout/appBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';

import TodoPage from './todo/todoPage';
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
    doing: {
      firstColor: '#26c6da',
      secondColor: '#00acc1',
    },
    done: {
      firstColor: '#ffa726',
      secondColor: '#fb8c00',
    },
    appBar: '#626C79',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppBar />
          <Switch>
            <Route exact path="/" component={TodoPage} />
            <Route exact path="/todo-form" component={TodoForm} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
