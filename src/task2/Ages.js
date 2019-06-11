import React from 'react';


const Ages = (props) => {
    console.log(props)
    return (<div> Name : {props.children} | Age : {props.age}</div>)
}
  
 export default Ages;
  