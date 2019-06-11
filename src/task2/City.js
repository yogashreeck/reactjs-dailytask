import React from 'react';


const City = (props) => {
    console.log(props)
    return (<div> Name : {props.children} | City : {props.city}</div>)
}
  
 export default City;