import React from 'react';
import AppBar from './layout/appBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodoContainer from './todo/todoContainer';

function App() {
  return (
    <BrowserRouter>
      <AppBar />    
      <Switch>
        <Route exact path="/"  component={TodoContainer} />
        <Route exact component={TodoContainer} />        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
