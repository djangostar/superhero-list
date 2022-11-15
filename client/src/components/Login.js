import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({login, updateUser}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const { username, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    
    fetch(`/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          login(user)
          navigate('/');
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <input type='submit' value='Log in!' />
      </form>
      {errors ? <div className='login-erros'>{errors}</div> : null}
    </>
  );
};

export default Login;
