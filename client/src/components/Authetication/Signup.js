import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';

const Signup = () => {
  const { signup } = useContext(UserContext);
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { username, password, passwordConfirmation } = form;

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username,
      password,
      passwordConfirmation,
    };

    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          signup(user);
          navigate('/');
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>Username: </label>
        <input
          type='text'
          name='username'
          value={username}
          placeholder='Username'
          onChange={handleChange}
        />
        <br />
        <label>Password: </label>
        <input
          type='password'
          name='password'
          value={password}
          placeholder='Password'
          onChange={handleChange}
        />
        <label>Confirm Password: </label>
        <input
          type='password'
          name='passwordConfirmation'
          value={passwordConfirmation}
          placeholder='Password Confirmation'
          onChange={handleChange}
        />
        <input type='submit' value='Sign Up!' />
      </form>
      {errors}
    </div>
  );
};

export default Signup;
