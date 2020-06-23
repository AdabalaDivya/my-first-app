import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Greet from './greeting';
// import Count from './Counter';
// import State from './StateConcept';
import data from './data/data.json';
import './css/bootstrap.min.css';
import pro from './images/profile.svg';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import resume from './resume.js';
import  './css/bootstrap.css';

function App() {
 return(
   <div className="App">
     <div className="body">
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/resume' component={resume}/>
    </BrowserRouter>
   </div>
   </div>
 );
}
 let Home=()=>{
let profiles=data.profile;
  return (
    <div className="row justify-content-center">
      {profiles.map((value,index)=>(
        <div className="col-lg-4 col-md-4 col-sm-10 mt-5" key={index}>
        <div className="card" style={{width:"25rem",fontStyle:"italic",boxShadow:"0px 8px 8px -8px #1000"}}>
        <img src={pro} style={{height:"50%"}}/>
          <div className="card-body text-center">
          <h1>{value.basics.name}</h1>
          <div className="text-secondary">
               <h4>{value.basics.role}</h4>
          </div>
             <a href={"tel"+value.basics.phone}>{value.basics.phone}</a><br/>
             <a href={"mailto"+value.basics.email}>{value.basics.email}</a><br/>
              <Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-primary">view</Link>
          </div>
      </div>
      </div>
      ))} 
  </div>
  );
}

export default App;
