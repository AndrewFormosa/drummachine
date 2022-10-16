import logo from './logo.svg';
import './App.scss';
import React from 'react';


class DrumMachine extends React.Component{
constructor(props){
  super(props);
  this.state={};
}


render(){
  return(
    <div className='container-fluid'>
      <p>my drun machine</p>
      <div class="row justify-content-md-center align-middle">
  <div class="col-md-auto">
    1 of 3
  </div>
  <div class="col-md-auto box">
    Variable width content asdasd
  </div>
</div>
    </div>
  );
}

}




function App() {
  return (
    <div className="App">
         <DrumMachine/> 
      </div>

  );
}

export default App;
