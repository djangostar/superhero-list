import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    fetch('/logout', {
      method: 'DELETE',
    });
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogOut}>Logout</button>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>
      <NavLink to='/signup'>
        <button>Sign Up</button>
      </NavLink>
      <NavLink to='/login'>
        <button>Log In</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
