import {Component} from 'react'
import './index.css'

class Clock extends Component{
    constructor(props){
        super(props)
        this.state={date:new Date()}
    }
    componentDidMount(){
        this.timerId=setInterval(this.time,1000)
    }
    componentDidUnmount(){
        clearInterval(this.timerId)
    }
    time=()=>{
        this.setState({date:new Date()})
    }
    render(){
        const {date}=this.state
        return(
            <div className="con">
                <h1 className="heading">Clock</h1>
                <p className="clock">{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock