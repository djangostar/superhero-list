import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HeroDetails = () => {
  const [thisHero, setThisHero] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/this_hero/${id}`)
      .then((res) => res.json())
      .then((data) => setThisHero(data));
  }, []);

  return (
    <div>
      Hero Details
      <br />
      {thisHero && <div>{thisHero.full_name}</div>}
    </div>
  );
};

export default HeroDetails;
