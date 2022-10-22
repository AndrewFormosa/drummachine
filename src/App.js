import logo from './logo.svg';
import './App.scss';
import React from 'react';
import kick_3 from "./drumSounds/Kick_3.wav";
import snare_3 from "./drumSounds/Snare_3.WAV";
import kick_4 from "./drumSounds/Kick_3.wav";
import snare_4 from "./drumSounds/Snare_3.WAV";


const soundBanks = [
  { "kitName": "kit1", "kitSounds": { "Q": { "sound": kick_3, "name": "kick_3" }, "W": { "sound": snare_3, "name": "snare" } } },
  { "kitName": "kit2", "kitSounds": { "Q": { "sound": kick_4, "name": "kick_4" }, "W": { "sound": snare_4, "name": "snare ok" } } },
  { "kitName": "kit3", "kitSounds": { "Q": { "sound": kick_4, "name": "kick_4" }, "W": { "sound": snare_4, "name": "snare ok" } } }
];


class DrumPadPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.playSound = this.playSound.bind(this);

  }
  playSound = (val) => {
    if(this.props.power){

    this.props.callback(this.props.bank.kitSounds[val].name);
    let myAudio = new Audio(this.props.bank.kitSounds[val].sound);
    myAudio.volume = this.props.vol * 0.02;
    myAudio.play();
  }}
  render() {
    return (

      <div className='container-flex'>
        <div className="row g-2">
          <div className="col-4">
            <button value="Q" onClick={(e) => this.playSound(e.target.value)} class="drum-pad">Q</button>
          </div>
          <div className="col-4">
            <button value="W" onClick={(e) => this.playSound(e.target.value)} className="drum-pad">W</button>
          </div>
          <div className="col-4">
            <button className="drum-pad">E</button>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-4">
            <button className="drum-pad">A</button>
          </div>
          <div className="col-4">
            <button class="drum-pad">S</button>
          </div>
          <div className="col-4">
            <button className="drum-pad">D</button>
          </div>
        </div>
        <div className="row g-2 ">
          <div className="col-4">
            <button className="drum-pad">Z</button>
          </div>
          <div className="col-4">
            <button className="drum-pad">X</button>
          </div>
          <div className="col-4">
            <button className="drum-pad">C</button>
          </div>
        </div>
      </div>


    );
  }
}

class UpDownPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
    this.increaseValue = this.increaseValue.bind(this);
  }

  increaseValue() {
    if (this.state.value < this.props.upperLimit && this.props.power) {
      this.setState({ value: this.state.value + this.props.step })
      this.props.changeCallBack(this.state.value + this.props.step);
    }
  }

  reduceValue() {
    if (this.state.value > this.props.lowerLimit && this.props.power) {
      this.setState({ value: this.state.value - this.props.step })
      this.props.changeCallBack(this.state.value - this.props.step);
    }
  }
  render() {
    return (
      <div class="container upDownControl">
        <div class="row">
          <div class="col-12 display-heading">{this.props.title}</div>
        </div>
        <div class="row g-0 pb-2">
          <div class="col-3">
            <button class="upDownButton" onClick={() => { this.reduceValue() }}>
              <span style={{color:this.props.powerColor}} class="material-symbols-outlined arrows">
                arrow_left</span></button></div>
          <div class="col-6">
            <div class="display" style={{color:this.props.powerColor}}>{this.state.value}</div></div>
          <div class="col-3">
            <button class="upDownButton" onClick={() => { this.increaseValue() }}>
              <span  style={{color:this.props.powerColor}} class="material-symbols-outlined arrows">
                arrow_right
              </span></button></div>
        </div>
      </div>
    );
  };
}





class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 5,
      bankNumber: 1,
      currentHit: "",
      power:true,
      powerColor:"green",
    };
    this.changeCurrentHit = this.changeCurrentHit.bind(this);
  }

changePower(){
  if(this.state.power){
    this.setState({power:false});
    this.setState({powerColor:"black"})

  }else{
    this.setState({power:true});
    this.setState({powerColor:"rgb(115, 255, 0)"})
  };

}

  changeCurrentHit(val) {
    this.setState({ currentHit: val });
  }

  changeVolume(val) {
    this.setState({ volume: val });
  }

  changeSoundBank(val) {
    this.setState({ bankNumber: val });
  }

  render() {
    return (
      <div>

        <div className='container machine-header'>
          <div className='row'>
            <div className='col-10 my-1'>
              <span className='heading'>My Drum Machine</span></div>
            <div className='col-2 d-flex justify-content-center m-auto'>
              <button class="power-switch material-symbols-outlined" style={{color:this.state.powerColor}} onClick={()=>{this.changePower()}}>power_rounded</button></div>
          </div>
        </div>
        <div className='container'>

          <div className="row justify-content-center">
            <div className="col-sm-12  box-one"><DrumPadPanel power={this.state.power} powerColor={this.state.powerColor} bank={soundBanks[this.state.bankNumber - 1]} vol={this.state.volume} callback={(hit) => { this.changeCurrentHit(hit) }} /></div>

            <div className="col-sm-12  box-two">


              <UpDownPanel title="Volume" power={this.state.power} powerColor={this.state.powerColor} upperLimit={10} initialValue={5} lowerLimit={0} step={1} changeCallBack={(vol) => this.changeVolume(vol)} />

              <UpDownPanel title="Sound Bank" power={this.state.power} powerColor={this.state.powerColor} upperLimit={3} initialValue={1} lowerLimit={1} step={1} changeCallBack={(ban) => this.changeSoundBank(ban)} />

              <div class="info-panel">
                <p style={{color:this.state.powerColor}}>bank: {soundBanks[this.state.bankNumber - 1].kitName}</p>
                <p style={{color:this.state.powerColor}}>sound:  {this.state.currentHit}</p>
              </div>
              <p className="footer">created by Andrew Formosa</p>
            

            </div>

          </div>
        </div>
      </div>
    );
  }

}


function App() {
  return (

    <div className="d-flex App min-vh-100">
      <div className="d-flex m-auto align-items-center">
        <DrumMachine />
      </div>
    </div>

  );
}

export default App;
