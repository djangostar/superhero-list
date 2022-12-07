import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';

export default function Signup() {
  const { ctxSetUserAndLogin } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
  });

  const navigate = useNavigate();
  const { username, password, passwordConfirmation } = form;

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username,
      password,
      password_confirmation: passwordConfirmation,
    };

    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        res.json().then((user) => {
          ctxSetUserAndLogin(user);
          navigate('/');
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
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
}
