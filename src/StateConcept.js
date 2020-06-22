import React,{useState} from 'react';
// useState--->Hook
// States-->Intailization-->this.state
// Manipulating state-->this.setState()

// class StateConcept extends Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//     increase=()=>{
//        this.setState({
//            count:this.state.count+1
//        })
//     }
//     decrease=()=>{
//         this.setState({
//             count:this.state.count-1
//         })
//      }
//     render(){
//         return(
//             <div>
//                 <h2 style={{textAlign:'center'}}>This is states concept &nbsp; {this.state.count}</h2>
//                 <button onClick={this.increase}>Increase</button> &nbsp;
//                 <button onClick={this.decrease}>Decrease</button>
//             </div>
//         )
//     }
// }

let StateConcept=()=>{
     const[count,changeCount]=useState(0);
    // const[count]=useState(["divya","keerthi",'sravani']);
  return(
      <div style={{textAlign:'center'}}>
          <h2>StateConcept Component</h2>
          {/* <h2>{count[0]}</h2> */}
         {/* <h2>{count.map(i=>(
             <span>{i}<br/></span>
         ))}</h2> */}
         <h2>{count}</h2>
         <button onClick={()=>(changeCount(count+1))}>Incerment</button>&nbsp;
         <button onClick={()=>(changeCount(count-1))}>Decerment</button>&nbsp;
         {/* <button onClick={()=>(changeCount((count+1)*2))}>multiply</button> */}
      </div>
  )
}

export default StateConcept;