import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const HeroDetails = () => {
  const [thisHero, setThisHero] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/this_hero/${id}`)
      .then((res) => res.json())
      .then((data) => setThisHero(data));
  }, [id]);

  return (
    <div>
      Hero Details
      <br />
      {thisHero && <div>{thisHero.full_name}</div>}
      <ReviewForm id={id}/>
    </div>
  );
};

export default HeroDetails;
