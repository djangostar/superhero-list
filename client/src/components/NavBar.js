import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = ({ user, updateUser, loggedIn, logout }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    fetch('/logout', {
      method: 'DELETE',
    });
    updateUser('');
    logout();
    navigate('/login');
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Hello {user.username}</h1>
        <br />
        <button onClick={handleLogOut}>Logout</button>
        <NavLink to='/'>
          <button>Home</button>
        </NavLink>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <NavLink to='/signup'>
          <button>Sign Up</button>
        </NavLink>
        <NavLink to='/login'>
          <button>Log In</button>
        </NavLink>
      </div>
    );
  }
};

export default NavBar;
