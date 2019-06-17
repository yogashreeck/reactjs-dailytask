import React from 'react'
import './user.css';

const Contacts = ({ hello, tsk }) => {
  return (
    <div className="heading">
      <center><h1>Contact List</h1></center>
        <div className="subhead">
          <h2>{hello.login}</h2>
          <p>{hello.html_url}</p>
          <p>{hello.type}</p>
          <p>{hello.bio}</p>
          <p>{hello.location}</p>
        </div>

        <div className="subhead2">
          <h5 >{tsk.userId}</h5>
          <h6>{tsk.id}</h6>
          <p>{tsk.title}</p>
          <p>{tsk.body}</p>

        </div>
      </div>

  )
};

export default Contacts;