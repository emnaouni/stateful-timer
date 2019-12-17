import React from 'react';
import './timer.css';
import Chrono from './Chrono';
class Timer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          timer: 0,
        }
   
    }
   
start=()=>{
    const interval=  setInterval(
        () => {
          // this.state.timer ++
          this.setState({
            timer: this.state.timer + 1000
          })
        },
        1000
      )
      this.setState({
          interval: interval
      })
    }
        

pause =()=>{
    clearInterval(this.state.interval);
    this.setState({interval:false})
}
reset=()=>{
this.setState({timer:0})
}
render(){
 
    return(
      <div> 
    <Chrono timer={this.state.timer}/>
<div className="boutton"><button value='start' onClick={this.state.interval?this.pause:this.start}>{this.state.interval?'Pause':'Start'}</button><button value='Reset'onClick={this.reset}>Reset</button></div>

</div>


    )
}

}
export default Timer;