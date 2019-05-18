import React, {Component} from 'react';
import logo from '../img/Logo.png';

console.log(logo);
class App_header extends Component{
  render(){
    return (
      <div className="App_header">
        <a className='nav-item' href='/'>A</a>
        <a className='nav-item' href='/'>B</a>
        <a className='nav-item' href='/'>C</a>
        <img className='logo' src={logo} alt="logo" />
      </div>
    );
  }
}


export default App_header;
