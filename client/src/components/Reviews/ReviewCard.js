import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import { useNavigate } from 'react-router-dom';

const HeroCard = () => {
  const { reviews } = useContext(UserContext);
  const navigate = useNavigate();

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
      {reviews &&
        reviews.map((review, i) => (
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
            {review.input}
            <br />
            <button onClick={() => navigate(`/review/${review.id}`)}>
              Review Details
            </button>
          </div>
        ))}
    </div>
  );
};

export default HeroCard;
