import React, { Component } from 'react';

export default class Counter extends Component{
    constructor(){
       super();
       this.state={
            message:"Divya",
            count:0
       }
    }
    change(){
        this.setState({
            message:"oho!You clicked me"
        })
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1><button onClick={()=>this.change()}>click me</button>
                <h1>{this.state.count}&nbsp;click here for increment</h1> &nbsp;
                <button onClick={()=>this.increment()}>increment</button>
            </div>
        )
    }
}