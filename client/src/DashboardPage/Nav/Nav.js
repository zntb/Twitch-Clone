import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../resources/images/logoPlaceholder.svg';
import { useUserDetails } from '../../shared/hooks';

const NavLogo = () => {
  return (
    <div className="nav-logo-container">
      <img className="nav-logo" width="100%" height="100%" src={logo} alt="Logo" />
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
  const { isLogged, logout } = useUserDetails();

  const navigate = useNavigate();

  const handleNavigateToAuth = () => {
    navigate('/auth');
  };

  const handleNavigateToSettings = () => {
    navigate('/settings');
  };

  const handleNavigateToChannels = () => {
    navigate('/channels');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
        <NavButton text="Browse" onclickHandler={handleNavigateToChannels} />
        {!isLogged ? (
          <NavButton text="Login" onclickHandler={handleNavigateToAuth} />
        ) : (
          <div>
            <NavButton text="My Account" onclickHandler={handleNavigateToSettings} />
            <NavButton text="Logout" onclickHandler={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};
