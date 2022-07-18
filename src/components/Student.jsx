import React from 'react';
function Student(props){
      return(
        <h1>hello {props.name}</h1> //use of component within component
      );
}
export default Student;