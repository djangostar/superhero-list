import React, {useContext} from 'react';
import {UserContext} from '../context/user'


const ReviewForm = ({id}) => {
  const {user} = useContext(UserContext)
  function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries())

    const payload = {
      superhero_id: Number(id),
      user_id: user.id,
      input: data.input,
      score: Number(data.score),
    }

    console.log(payload)
    fetch('/create_review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)

    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='input' placeholder='Review your superhero' />
      <input type='number' min='0' max='10' name='score' placeholder='0' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ReviewForm;
