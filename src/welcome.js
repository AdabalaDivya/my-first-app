import React from 'react';

// class Welcome extends React.Component{
//     render(){
//            return(<h1>Welcome</h1>); 
//         }
//   }

let Welcome=(props)=>{
  // props can't change it is immutable
  // this.props={
  //   name:"divya"
  // }
return(<h1>Welcome {props.name} </h1>)
}
export default Welcome;