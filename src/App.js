import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Singup from './task1/Singup';
import Singin from './task1/Singin';
import Age from './task2/Age';
import Cities from './task2/Cities';
import BirthDate from './task2/BirthDate';
import SingupLife from './task2/SingupLife';

function App() {
  return (

    <Router>
      <switch>
        <Route exact path='/singup' component={Singup}></Route>
        <Route exact path='/singin' component={Singin}></Route>
        <Route exact path='/age' component={Age}></Route>
        <Route exact path='/cities' component={Cities}></Route>
        <Route exact path='/birthdate' component={BirthDate}></Route>
        <Route exact path='/singlife' component={SingupLife}></Route>

      </switch>
    </Router>
  )
}

export default App;
