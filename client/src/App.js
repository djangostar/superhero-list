import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import HeroDetails from './components/HeroDetails';
import HeroContainer from './components/HeroContainer';
import HeroForm from './components/HeroForm';
import ReviewContainer from './components/ReviewContainer';
import ReviewDetails from './components/ReviewDetails';

function App() {
  const [user, setUser] = useState({});
  const [reviews, setReviews] = useState([]);
  // const [superheros, setSuperHeros] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setUser(data);
          setLoggedIn(true);
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/reviews')
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  const navigate = useNavigate();

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => {
      setLoggedIn(false);
      setUser({});
    });
    navigate('/');
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const updateUser = (user) => {
    setCurrentUser(user);
    setLoggedIn(true);
  };

  if (errors) return <h1>{errors}</h1>;

  return (
    <div className='App'>
      <NavBar
        user={user}
        logout={logout}
        loggedIn={loggedIn}
        updateUser={updateUser}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup signup={signup} />} />
        <Route path='/login' element={<Login login={login} />} />
        <Route path='superheros' element={<HeroContainer />} />
        <Route path='/superheros/:id' element={<HeroDetails />} />
        <Route path='supeheros/new' element={<HeroForm />} />
        <Route
          path='/reviews'
          element={<ReviewContainer reviews={reviews} />}
        />
        <Route path='/reviews/:id' element={<ReviewDetails />} />
      </Routes>
    </div>
  );
}
export default App;
