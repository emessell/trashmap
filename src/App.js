import React from 'react';
import './style/css/Reset.css';
import './style/css/style.min.css';
import Header from './view/Header';
import Body from './view/Body';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
