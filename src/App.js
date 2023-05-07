import {Component} from 'react'
import Clock from './components/Clock'
import './App.css'

class App extends Component{
    state={clock:false}

    toShowClock=()=>{
        this.setState(prevState=>({clock:!prevState.clock}))
    }

    render(){
      const {clock}=this.state

      return(
        <div className="container">
            <button className="button" type="button" onClick={this.toShowClock}>{clock ? "Hide Clock" : "Show Clock"}</button>
            {clock && <Clock/>}
        </div>
      )
    }
}

export default App