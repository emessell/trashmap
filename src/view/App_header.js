import React from 'react';
import logo from '../img/Logo.png';

console.log(logo);

function App_header() {
  return (
    <div className="App_header">
      <img src='{logo}'></img>
      <a className='nav-item' href='/'>A</a>
      <a className='nav-item' href='/'>B</a>
      <a className='nav-item' href='/'>C</a>
    </div>
  );
}

export default App_header;
