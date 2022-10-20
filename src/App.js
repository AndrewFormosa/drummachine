import logo from './logo.svg';
import './App.scss';
import React from 'react';
//import mySound from "./drumSounds/Kick_3.wav";
import kick_3 from "./drumSounds/Kick_3.wav";
import snare_3 from "./drumSounds/Snare_3.WAV";
import kick_4 from "./drumSounds/Kick_3.wav";
import snare_4 from "./drumSounds/Snare_3.WAV";

const soundBanks=[
{"kitName":"kit1","kitSounds":{"Q":{"sound":kick_3,"name":"kick_3"}, "W":{"sound":snare_3,"name":"snare"}}},
{"kitName":"kit2","kitSounds":{"Q":{"sound":kick_4,"name":"kick_4"},"W":{"sound":snare_4, "name":"snare ok"}}},
{"kitName":"kit3","kitSounds":{"Q":{"sound":kick_4,"name":"kick_4"},"W":{"sound":snare_4, "name":"snare ok"}}}
];


class DrumPadPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.playSound=this.playSound.bind(this);

  }
  playSound=(val)=>{
    this.props.callback(this.props.bank.kitSounds[val].name);
     let myAudio=new Audio(this.props.bank.kitSounds[val].sound);
     myAudio.volume=this.props.vol*0.02;
     myAudio.play();
   }
  render() {
    return (

      <div className='container-flex'>
        <div className="row g-2">
          <div className="col-4">
            <button value ="Q" onClick={(e)=>this.playSound(e.target.value)} class="drum-pad btn btn-secondary">Q</button>
          </div>
          <div className="col-4">
            <button  value ="W" onClick={(e)=>this.playSound(e.target.value)} className="drum-pad btn btn-secondary">W</button>
          </div>
          <div className="col-4">
            <button className="drum-pad btn btn-secondary">E</button>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-4">
            <button className="drum-pad btn btn-secondary">A</button>
          </div>
          <div className="col-4">
            <button class="drum-pad btn btn-secondary">S</button>
          </div>
          <div className="col-4">
            <button className="drum-pad btn btn-secondary">D</button>
          </div>
        </div>
         <div className="row g-2 ">
          <div className="col-4">
            <button className="drum-pad btn btn-secondary">Z</button>
          </div>
          <div className="col-4">
            <button class="drum-pad btn btn-secondary">X</button>
          </div>
          <div className="col-4">
            <button className="drum-pad btn btn-secondary">C</button>
          </div>
        </div>
      </div>


    );
  }
}

class UpDownPanel extends React.Component{
constructor(props){
  super(props);
  this.state={
    value:props.initialValue,
  };
  this.increaseValue=this.increaseValue.bind(this);
  }

increaseValue(){
    if(this.state.value<this.props.upperLimit){
    this.setState({value:this.state.value+this.props.step})
    this.props.changeCallBack(this.state.value+this.props.step);
    }
}

reduceValue(){
  if(this.state.value>this.props.lowerLimit){
  this.setState({value:this.state.value-this.props.step})
  this.props.changeCallBack(this.state.value-this.props.step);
  }
}
    render(){
    return(
      <div>
        <button  onClick={()=>{this.reduceValue()}}></button><span>{this.props.title}{this.state.value}</span><button onClick={()=>{this.increaseValue()}}></button>
      </div>
    );
    };
}





class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume:5,
      bankNumber:1,
      currentHit:"",
    };
this.changeCurrentHit=this.changeCurrentHit.bind(this);
  }

  changeCurrentHit(val){
 this.setState({currentHit:val});
  }

  changeVolume(val){
    this.setState({volume:val});
  }

changeSoundBank(val){
  this.setState({bankNumber:val});
}

  render() {
    return (
      <div className='container'>
        <p>my drun machine</p>
        <div className="row justify-content-center">
          <div className="col-sm-12  box-one"><DrumPadPanel bank={soundBanks[this.state.bankNumber-1]} vol={this.state.volume} callback={(hit)=>{this.changeCurrentHit(hit)}}/></div>
      
          <div className="col-sm-12  box-two">DrumPad{this.state.currentHit}
             <UpDownPanel title="Volume" upperLimit={10} initialValue={5} lowerLimit={0} step={1} changeCallBack={(vol)=>this.changeVolume(vol)}/>
       
             <UpDownPanel title="Sound Bank" upperLimit={3} initialValue={1} lowerLimit={1} step={1} changeCallBack={(ban)=>this.changeSoundBank(ban)}/>
            {soundBanks[this.state.bankNumber-1].kitName}
          
          </div>
     
      </div>
        </div>
    );
  }

}


function App() {
  return (

    <div className="d-flex App min-vh-100 border border-primary">
      <div className="d-flex m-auto border border-primary align-items-center">
        <DrumMachine />
      </div>
    </div>

  );
}

export default App;
