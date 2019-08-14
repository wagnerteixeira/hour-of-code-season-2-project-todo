import React from 'react';
import AppBar from './layout/appBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import TodoContainer from './todo/todoContainer';

const theme = createMuiTheme({
  palette: {
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
          <Route exact component={TodoContainer} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
