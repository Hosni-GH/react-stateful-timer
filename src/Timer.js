import React, { Component } from 'react';
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            seconds:0,
            isOn:false,
            btnText:"Start"
         }
    }
     Start = () =>{
        this.myInterval= setInterval(()=>{
            this.setState({
                seconds:this.state.seconds+1
            })
        },1000)
        this.setState({
            isOn:true,
            btnText:"Pause"
        })
    }
    Reset = () => {
        clearInterval(this.myInterval)
        this.setState ({
            seconds:0,
            isOn:false,
            btnText:"Start"
        })
    }
    Stop = () =>{
        clearInterval(this.myInterval)
        this.setState({
            isOn:false,
            btnText:"Start"
        })
    }
    msToTime(s) {
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60; 
        hrs=hrs<10 ? ("0"+hrs): hrs;
        mins=mins<10 ? ("0"+mins): mins;
        secs=secs<10 ? ("0"+secs): secs;
        return <div className="output">
                    <div className="output-flex"><span id="hours">{hrs}</span>
                    <span className="date-text">Hours</span></div>
                    <div className="output-flex"><span id="hours">:</span>
                    <span className="date-text">:</span></div>
                    <div className="output-flex"><span id="minutes">{mins}</span>
                    <span className="date-text">Minutes</span></div>
                    <div className="output-flex"><span id="hours">:</span>
                    <span className="date-text">:</span></div>
                    <div className="output-flex"><span id="secondes">{secs}</span>
                    <span className="date-text">Secondes</span></div>
                </div>
      }
    render() { 
        return ( <div className="main-container">
                    <div className="main-container-output">
                  {this.msToTime(this.state.seconds)}   
                        <div className="btns">
                            <button id="btn-start-pause" onClick={!this.state.isOn ? this.Start:this.Stop}>{this.state.btnText}</button>
                            <button id="btn-reset" onClick={this.Reset}>Reset</button>
                        </div>
                    </div>
                 </div> );
    }
}
 
export default Timer;