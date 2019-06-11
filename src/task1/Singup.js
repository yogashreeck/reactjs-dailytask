import React from 'react';
import './Singup.css';


function Singup() {
  return (
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
  );
}

export default Singup;