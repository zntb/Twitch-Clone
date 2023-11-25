import React from 'react';
import logo from '../../resources/images/logoPlaceholder.svg';

const NavLogo = () => {
  return (
    <div className="nav-logo-container">
      <img
        className="nav-logo"
        width="100%"
        height="100%"
        src={logo}
        alt="Logo"
      />
    </div>
  );
};

const NavButton = ({ text, onclickHandler }) => {
  return (
    <span className="nav-button" onClick={onclickHandler}>
      {text}
    </span>
  );
};

export const Nav = () => {
  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
        <NavButton text="Browse" onclickHandler={() => {}} />
        <NavButton text="Login" onclickHandler={() => {}} />
        <div>
          <NavButton text="My Account" onclickHandler={() => {}} />
          <NavButton text="Logout" onclickHandler={() => {}} />
        </div>
      </div>
    </div>
  );
};
