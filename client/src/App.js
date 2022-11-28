import React from 'react';
import { UserProvider } from './context/user';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Login from './components/Authetication/Login';
import Signup from './components/Authetication/Signup';
import HeroContainer from './components/Heroes/HeroContainer';
import MySuperheroes from './components/Heroes/MySuperheroes';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/all_heroes' element={<HeroContainer />} />
          <Route path='/my_heroes' element={<MySuperheroes />} />
        </Routes>
      </UserProvider>
    </div>
  );
}
export default App;
