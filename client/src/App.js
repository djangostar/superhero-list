import React, { useState }from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import UserPage from './components/UserPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users/:id' element={<UserPage />} />
      </Routes>
    </div>
  );
}
export default App;
