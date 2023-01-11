import React, { useContext } from 'react';
import { UserContext } from '../../context/user'
import { useNavigate } from 'react-router-dom';
import HeroForm from '../Forms/HeroForm';
// import ReviewForm from '../Forms/ReviewForm';


const HeroContainer = () => {
  const { heroes } = useContext(UserContext)
  console.log(heroes)

  // useEffect(() => {
  //   fetch('/all_heroes')
  //     .then((res) => res.json())
  //     .then((data) => setHeroes(data));
  // }, []);

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
      <HeroForm />
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
            <button onClick={() => navigate('/create_review')}>Add a Review</button>
          </div>
        ))}
    </div>
  );
};

export default HeroContainer;
