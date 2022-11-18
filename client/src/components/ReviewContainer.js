import React, { useContext }from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'
import ReviewForm from './ReviewForm'

const ReviewContainer = () => {
  const { allReviews } = useContext(UserContext)
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
      <ReviewForm />
      {allReviews &&
        allReviews.map((review, i) => (
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
            <button onClick={() => navigate(`/all_reviews/${review.id}`)}>
              Details
            </button>
          </div>
        ))}
    </div>
  );
}

export default ReviewContainer