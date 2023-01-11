import React from 'react';
import { UserProvider } from './context/user';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Login from './components/Authetication/Login';
import Signup from './components/Authetication/Signup';
import Home from './components/pages/HomePage/Home';
import HeroContainer from './components/Heroes/HeroContainer';
import MySuperheroes from './components/Heroes/MySuperheroes';
import HeroForm from './components/Forms/HeroForm';
import HeroDetails from './components/Heroes/HeroDetails';
import ReviewForm from './components/Forms/ReviewForm';
// import ReviewContainer from './components/Reviews/ReviewContainer';
// import Reviews from './components/Reviews/ReviewCard';
// import ReviewCard from './components/Reviews/ReviewCard';
// import ReviewDetails from './components/Reviews/ReviewDetails';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/all_heroes' element={<HeroContainer />} />
          <Route path='/my_heroes' element={<MySuperheroes />} />
          <Route path='/create_hero' element={<HeroForm />} />
          <Route path='/hero/:id' element={<HeroDetails />} />
          <Route path='/create_review' element={<ReviewForm />} />
          {/* <Route path='/reviews' element={<Reviews />} />
          <Route path='/review_container' element={<ReviewContainer />} />
          <Route path='/review_card' element={<ReviewCard />} />
          <Route path='/review/:id' element={<ReviewDetails />} /> */}
        </Routes>
      </UserProvider>
    </div>
  );
}
export default App;
