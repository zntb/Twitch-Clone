import React from 'react';
import logo from '../../resources/images/logoPlaceholder.svg';
import { useUserDetails } from '../../shared/hooks';

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
  const { isLogged } = useUserDetails();

  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
        <NavButton text="Browse" onclickHandler={() => {}} />
        {!isLogged ? (
          <NavButton text="Login" onclickHandler={() => {}} />
        ) : (
          <div>
            <NavButton text="My Account" onclickHandler={() => {}} />
            <NavButton text="Logout" onclickHandler={() => {}} />
          </div>
        )}
      </div>
    </div>
  );
};
