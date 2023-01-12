import React, { useContext } from 'react';
import { UserContext } from '../../../context/user';
import ReviewContainer from '../../Reviews/ReviewContainer';

const Home = () => {
  const { user, isLoggedIn } = useContext(UserContext);

  // useEffect(() => {
  //   console.log({ user, isLoggedIn });
  // }, [isLoggedIn, user]);

  const loggedInDisplay = (
    <div>
      <h1>{user.username}'s Page</h1>
      <ReviewContainer />
    </div>
  );

  const loggedOutDisplay = (
    <div>
      <h1>Welcome!</h1>
      <br />
      <h2>
        Please Sign Up or Log In to review and list your favorite SuperHeroes
      </h2>
    </div>
  );

  return isLoggedIn ? loggedInDisplay : loggedOutDisplay;
};

export default Home;
