import React, { useContext } from 'react';
import { UserContext } from '../../context/user';

const ReviewForm = () => {
  const { addReview, allReviews } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const payload = {
      input: data.input,
      score: data.score,
    };
    addReview(payload);
    console.log(payload);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add a Review!</h1>
        </div>
        <label>Review: </label>
        <input type='textarea' id='input' name='input' /> <br />
        <label>
          Score:
          <select name='score_id'>
            <option>Score</option>
            {allReviews.map((review) => (
              <option value={review.id}>{review.score}</option>
            ))}
          </select>
        </label>
        <input type='submit' value='Add Review' />
      </form>
    </div>
  );
};

export default ReviewForm;
