import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

export class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="header">
        <Logo/>
        <Navbar/>
      </div>
    )
  }
}

export class Logo extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    )
  }
}

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
      </div>
    )
  }
}

export default Header