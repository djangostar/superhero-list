import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/user';


const ReviewDetails = () => {
  const { reviews } = useContext(UserContext);
  const params = useParams();

  const review = reviews.find((r) => `${r.id}` === params.id);

  if (review) {
    return (
      <div>
        <h2>Reviewed Hero Details</h2>
        <h4>Review: {review.input}</h4>
        <h4>Alias: {review.superhero_id}</h4>
        
        <br/>
        
        {/* <button onClick={() => navigate('/create_review')}>Add a Review</button> */}
      </div>
    );
  } else {
    return <h2>Not Authorized</h2>;
  }
};

export default ReviewDetails;