import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [username, setUserName] = useState({});
  const [loggedin, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/me')
      .then((res) => res.json())
      .then((data) => {
        setUserName(data);
      });
  }, []);

  const logIn = (user) => {};

  const logout = (user) => {};

  return (
    <div className='App'>
      <NavBar username={username} />
      <Routes>
        <Route path='/' element={<Home username={username}/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
