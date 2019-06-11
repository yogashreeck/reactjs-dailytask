import React from 'react';


const Dates = (props) => {
    console.log(props)
    return (<div> Name : {props.children} | Date : {props.date}</div>)
}
  
 export default Dates;