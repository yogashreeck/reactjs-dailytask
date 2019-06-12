import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Singin from './task1/Singin';
import Age from './task2/Age';
import Add from './task3/Add.js'

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path='/task1' component={Singin}></Route>
          <Route exact path='/task2' component={Age}></Route>
          <Route exact path='/task3' component={Add}></Route>
        </switch>
      </Router>
    </div>
  )
}

export default App;
