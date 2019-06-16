import React, {Component} from 'react';
import logo from '../img/Logo.png';

class Header extends Component{
  render(){
    return (
      <div className="Header">
        <a href='/' className='goHome'>
          <img className='logo' src={logo} alt="logo" />
        </a>
        <ul className='nav'>
            <li>To a</li>
            <li>To b</li>
            <li>To c</li>
        </ul>
      </div>
    );
  }
}


export default Header;
