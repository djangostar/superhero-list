import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import { useNavigate } from 'react-router-dom';

const ReviewForm = () => {
  const { addReview } = useContext(UserContext);

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const payload = {
      input: data.input,
      superhero_id: data.superhero_id,
    };
    addReview(payload);
    navigate('/my_heroes');
    console.log(payload);
  };

  // const reviewHero = heroes.map(hero => hero.alias)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add a Review!</h1>
        </div>
        <label>Review: </label>
        <textarea
          type='text'
          id='inputID'
          placeholder='Review This Superhero!'
          rows='5'
          cols='48'
          name='input'
        ></textarea>
        <br />
        <input type='submit' value='Add Review' />
      </form>
    </div>
  );
};

export default ReviewForm;
