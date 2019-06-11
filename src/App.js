import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
// import Singup from './task1/Singup';
// import Singin from './task1/Singin';
// import Age from './task2/Age';
// import Cities from './task2/Cities';
// import Date from './task2/Date';
import Singup from './task2/Singup';

function App() {
  return (

   <Router>
     {/* <switch> */}
       {/* <Route exact path='/' component={Singup}></Route>
       <Route exact path='/' component={Singin}></Route>
       <Route exact path='/' component={Age}></Route>
       <Route exact path='/' component={Cities}></Route>
       <Route exact path='/' component={Date}></Route> */}
       <Route exact path='/' component={Singup}></Route>

     {/* </switch> */}
   </Router>
      // <Singup />
      // <Singin />
      // <Age />
      // <Cities />
      // <Date />
      // <Singup />
   
  )
}

export default App;
