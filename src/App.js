import logo from './logo.svg';
import './App.scss';
import React from 'react';
//import mySound from "./drumSounds/Kick_3.wav";
import s00 from "./drumSounds/Kick_3.wav";
import s01 from "./drumSounds/Snare_3.WAV";
import s10 from "./drumSounds/Kick_3.wav";
import s11 from "./drumSounds/Snare_3.WAV";

const a=[{"A":s00, "B":s01},{"A":s10,"B":s11}];


class DrumPadPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

      <div className='container-flex'>
        <div className="row g-2 my-1 ">
          <div className="col-4">
            <button class="drum-pad btn btn-secondary">Q</button>
          </div>
          <div className="col-4">
            <button className="drum-pad btn btn-secondary">W</button>
          </div>
          <div className="col-4">
            <button className="drum-pad btn btn-secondary">E</button>
          </div>
        </div>
        <div className="row g-2 ">
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





class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      audio:new Audio(a[0].B),
      isPlaying:false,
      

    };

    this.playSound=this.playSound.bind(this);

  }




  playSound=(val)=>{
   //this.setState({audio: new Audio(s00)});
    let myAudio=new Audio(a[0].A);
    myAudio.play();
  }


  render() {



    return (
    

      <div className='container'>
        <p>my drun machine</p>
        <div className="row justify-content-center">
          <div className="col-sm-12  box-one"><DrumPadPanel /></div>
          <button class="btn btn-primary" onClick={this.playSound}>ckilckMe</button>
          <div className="col-sm-12  box-two">DrumPad</div>
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
