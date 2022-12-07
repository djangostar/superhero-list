import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/user';
import MySuperheroes from '../../Heroes/MySuperheroes';

const Home = () => {
  const { user, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    console.log({user, isLoggedIn})
  }, [isLoggedIn, user])

  const loggedInDisplay = () => (
    <div>
      <h1>{user.username}</h1>
      <h3>
        <MySuperheroes />
      </h3>
    </div>
  );

  const loggedOutDisplay = () => (
    <div>
      <h1>Welcome!</h1>
      <br />
      <h2>Please Sign Up or Log In to review and list your favorite SuperHeroes</h2>
    </div>
  );

  return isLoggedIn ? loggedInDisplay() : loggedOutDisplay();
};

export default Home;
