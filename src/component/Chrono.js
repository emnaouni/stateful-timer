import React from 'react';


const Chrono =(props)=>{let hours =Math.floor((props.timer / 3600000)%24)
    let minute=Math.floor((props.timer/60000)%60)
    let seconds=Math.floor((props.timer/1000)%60)
    return(
        <div className="time"><div className="time-items"><p>{hours<=9?'0'+hours:hours}</p><span >Hours</span></div> <div className="time-items"><p>  :{minute<=9?'0'+minute:minute}</p><span>Minutes</span></div><div className="time-items"><p>   :{seconds<=9?'0'+seconds:seconds}</p><span>  Seconds</span></div></div>

    )}

    


export default Chrono;