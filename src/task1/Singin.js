import React from 'react';
import './Singin.css';
import SingupLife from './SingupLife';
import './Singup.css';



function Singin() {
  return (
    <div>
      <div className="singin" >
        <div className="sing">
          <h1>SING IN</h1>
          <input className="inbox" type="text" placeholder="Email address" /><br></br>
          <input className="inbox" type="text" placeholder="Password" /><br></br>
          <button className="logbtn">Login</button><br></br>
          <a className="forgot"><u>Forgot your password?</u></a>
        </div>
        <a className="Dont">don't have an account? <u>Sing up</u></a>
      </div>
      <SingupLife />
    </div>
  );
}


export default Singin;