import logo from './logo.svg';
import './App.scss';
import React from 'react';


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
          <div className="col-sm-12  box-one">Controlls</div>
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
