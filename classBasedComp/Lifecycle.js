import React, { Component } from "react";
class Lifecycle extends Component{
    constructor(){
        super()
        console.log("constructor called")
        this.state={
            fname:"Gourav",
            color:"blue",
            count:0
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate called")
        console.log(nextState)
        if(nextState.count===15){
            return false
        }
        return true
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedState called")
    }
    componentDidMount(){
        console.log("componentDidMount called")
    }
    render(){
        console.log("render called")
        return(
            <div>
                <h1 onClick={()=>this.setState({count:6})}>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>++++</button>
            </div>
        )
    }
}
export default Lifecycle;