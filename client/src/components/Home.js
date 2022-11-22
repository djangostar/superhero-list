import React, { useContext } from 'react';
import { UserContext } from '../context/user';

const Home = () => {
  const { user, loggedIn, allReviews, allHeroes } = useContext(UserContext);
  console.log(allReviews);

  const loggedInDisplay = () => (
    <div>
      <h1>{user.username}'s</h1>
      <h3>Superheroes</h3>
      <ul>
        {allHeroes.map((hero, index) => (
          <h2 key={index}>{hero.alias}</h2>
        ))}
      </ul>
      <ul>
        <h2>Reviews</h2>
        {allReviews.map((review, index) => (
          <li>
            <h2 key={index}>{review.input}</h2>
            <br />
            <h2 key={index}>{review.score}</h2>
          </li>
        ))}
      </ul>
    </div>
  );

  const loggedOutDisplay = () => (
    <div>
      <h1>Welcome!</h1>
    </div>
  );

  return loggedIn ? loggedInDisplay() : loggedOutDisplay();

  //   return (
  //     <div>H</div>
  //   )
};

export default Home;
