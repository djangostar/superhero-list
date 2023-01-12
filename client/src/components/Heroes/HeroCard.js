import React, { useContext } from 'react';
import { UserContext } from '../../context/user'
import { useNavigate } from 'react-router-dom'


const HeroCard = () => {
  const { heroes } = useContext(UserContext)
  const navigate = useNavigate()

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
    
    {heroes &&
      heroes.map((hero, i) => (
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
          {hero.full_name}<br />
          <img src={hero.img_url} alt='superhero' />
          <button onClick={() => navigate(`/hero/${hero.id}`)}>Details</button>
          
        </div>
      ))}
  </div>
  );
}

export default HeroCard;
