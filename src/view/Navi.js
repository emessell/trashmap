import React, {Component} from 'react';
import logo from '../img/Logo.png';

class Navi extends Component{
  render(){
    return (
        <ul className="nav">
            <li href="#home">
                <img src={logo} className="logo" alt='home'/>
            </li>
            <li className='hover' href="#news">Add</li>
            <li className='hover' href="#contact">List</li>
        </ul>
    );
  }
}

export default Navi;
