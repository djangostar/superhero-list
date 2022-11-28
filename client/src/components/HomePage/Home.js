import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import HeroContainer from '../Heroes/HeroContainer';

const Home = () => {
  const { user, loggedIn } = useContext(UserContext);

  const loggedInDisplay = () => (
    <div>
      <h1>{user.username}</h1>
      <h3>
        <HeroContainer />
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

  return loggedIn ? loggedInDisplay() : loggedOutDisplay();

  //   return (
  //     <div>H</div>
  //   )
};

export default Home;
