import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Todos from '../pages/Todos'
import TodoNew from '../pages/TodoNew'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/todos" component={Todos} />
      <Route exact path="/todos/new" component={TodoNew} />
    </BrowserRouter>
  );
}

export default App;
