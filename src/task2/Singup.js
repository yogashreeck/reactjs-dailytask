import React, { Component } from 'react';
import './Singup.css';

class Singup extends Component {
componentWillMount(){
    console.log('Singup componentWillMount')
};

componentDidMount(){
    console.log('Singup componentDidMount')
};

    render() {
        console.log('Singup render')
        return (
            <div>
                <div className="singup">
      <div className="Head">
        <h1> Sign Up</h1>
      </div>
      <label>
        Name:
          </label><br></br>
      <input className="box" type="text" /><br></br>
      <label >
        Email:
          </label><br></br>
      <input className="box" type="text" /><br></br>
      <label >
        Password:
          </label><br></br>
      <input className="box" type="text" /><br></br>
      <label >
        Confarmation:
          </label><br></br>
      <input className="box" type="text" /><br></br>
      <button className="create"> create my account</button>


    </div>
            </div>
        );
    }
}

export default Singup;