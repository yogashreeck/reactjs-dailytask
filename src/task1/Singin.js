import React from 'react';
import './Singin.css';



function Singin() {
  return (
    <div className="singin" >
      <div className="sing">
        <h1>Sing In</h1>
        <input className="inbox" type="text" placeholder="email address" /><br></br>
        <input className="inbox" type="text" placeholder="password" /><br></br>
        <button className="logbtn">Login</button><br></br>
        <a className="forgot">Forgot your password?</a>
      </div>
      <a className="Dont">don't have an account? Sing up</a>
    </div>
  );
}


export default Singin;