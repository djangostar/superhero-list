import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import HeroForm from './HeroForm'

const HeroContainer = () => {
const navigate = useNavigate()
  const [allHeroes, setAllHeroes] = useState([]);

  useEffect(() => {
    fetch('/all_heroes')
      .then((res) => res.json())
      .then((data) => setAllHeroes(data));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        width: '90%',
        margin: 'auto',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <HeroForm />
      {allHeroes &&
        allHeroes.map((hero, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: 'black solid',
              width: '100%',
              maxWidth: '200px',
            }}
          >
            {hero.full_name}
            <button onClick={() => navigate(`/superheros/${hero.id}`)}>Details</button>
          </div>
        ))}
    </div>
  );
};

export default HeroContainer;
