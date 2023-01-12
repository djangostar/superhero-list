import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/user';
import ReviewForm from '../Forms/ReviewForm' 

const HeroDetails = () => {
  const { heroes } = useContext(UserContext);
  const params = useParams();

  const hero = heroes.find((h) => `${h.id}` === params.id);

  if (hero) {
    return (
      <div>
        <h2>Hero Details</h2>
        <h4>Full Name: {hero.full_name}</h4>
        <h4>Alias: {hero.alias}</h4>
        <h4>Biography: {hero.bio}</h4>
        <h4>Universe: {hero.universe}</h4>
        <h4>Imgage: </h4>
        <img src={hero.img_url} alt='superhero' />
        <br/>
        <ReviewForm />
        {/* <button onClick={() => navigate('/create_review')}>Add a Review</button> */}
      </div>
    );
  } else {
    return <h2>Not Authorized</h2>;
  }
};

export default HeroDetails;
