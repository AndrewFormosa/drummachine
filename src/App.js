import logo from './logo.svg';
import './App.scss';
import React from 'react';


class DrumPadPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

      <div className='container-flex'>
        <div className="row justifty-content-around g-2 my-1 ">
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
        <div className="row justifty-content-around g-2 ">
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
         <div className="row justifty-content-around g-2 ">
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
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <p>my drun machine</p>
        <div className="row justify-content-center">
          <div className="col-sm-12  box-one"><DrumPadPanel /></div>
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
