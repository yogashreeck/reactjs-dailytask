import React from 'react'

    const Contacts = ({ hello }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {hello.map(contact => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{login}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{id}</h6>
                <p class="card-text">{name}</p>
                <p class="card-text">{contact.company}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts;
    