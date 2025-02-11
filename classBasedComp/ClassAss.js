import React, { Component } from "react";
class ClassAss extends Component{
    constructor(props){
        super(props)
        this.state={
            time: new Date()
        }
    }
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.setState({time: new Date()})
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render(){
        const {time} = this.state;
        return(
            <div>
                <h1>Real Time</h1>
                <p>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>
            </div>
        )
    }
}
export default ClassAss;