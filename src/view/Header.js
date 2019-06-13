import React, {Component} from 'react';
import logo from '../img/Logo.png';

class Header extends Component{
  render(){
    return (
      <div className="Header">
        <a href='/'>
          <img className='logo' src={logo} alt="logo" />
        </a>
      </div>
    );
  }
}


export default Header;
