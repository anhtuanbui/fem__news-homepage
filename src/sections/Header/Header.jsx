import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-menu.svg';
import hamburgerClose from '../../assets/images/icon-menu-close.svg';
import './Header.scss';

export class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="header">
        <Logo />
        <Navbar />
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
  hamburgerMenuClose = true;

  onHamburgerMenuClicked = () => {
    const navbar = document.getElementById('navbar');
    const overlay = document.querySelector('.navbar-overlay');

    navbar.classList.toggle('navbar-show');
    overlay.classList.toggle('overlay');
    this.hamburgerMenuClose = !this.hamburgerMenuClose;

    this.setState({ hamburgerMenuClose: this.hamburgerMenuClose });
  }

  onOverlayClicked = () => {
    this.onHamburgerMenuClicked();
  }

  render() {
    return (
      <div className="navbar">
        <ul id='navbar' className='navbar-ul'>
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
        <div className="navbar-overlay" onClick={this.onOverlayClicked}></div>
        <div className="hamburger-menu" onClick={this.onHamburgerMenuClicked}>
          {this.hamburgerMenuClose === true
            ? (<img className='button__hamburger--close' src={hamburger} alt="menu button" />)
            : (<img className='button__hamburger--open' src={hamburgerClose} alt="menu button" />)
          }
        </div>
      </div>

    )
  }
}

export default Header