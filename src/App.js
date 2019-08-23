import React from 'react';
import './style/css/Reset.css';
import './style/css/style.min.css';
import Navi from './view/Navi';
import Body from './view/Body';
import Welcome from './view/Welcome';
import Tick from './view/Tick';
import Toggle from './view/Toggle';
import LoginControl from './view/LoginControl';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Body></Body>
      <Welcome name='Minseop'></Welcome>
      <Tick></Tick>
      <Toggle></Toggle>
      <LoginControl></LoginControl>
    </div>
  );
}


export default App;
