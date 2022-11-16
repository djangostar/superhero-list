import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ updateUser, signup }) => {
  
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries())
    if (data.password === data.password_confirmation) {
      
    

    const payload = {
      username: data.username,
      password: data.password,
      password_confirmation: data.password_confirmation
    }

    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          signup(user);
          updateUser(user);
          navigate('/');
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  } else alert('fuck you')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>Username: </label>
        <input
          type='text'
          name='username'
        />
        <br />
        <label>Password: </label>
        <input
          type='password'
          name='password'
        />
        <label>Confirm Password: </label>
        <input
          type='password'
          name='password_confirmation'
        />
        <input type='submit' value='Sign Up!' />
      </form>
      {errors
        ? errors.map((error) => <div className='errors'>{error}</div>)
        : null}
    </>
  );
};

export default Signup;
