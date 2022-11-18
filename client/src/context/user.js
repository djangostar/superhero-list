import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [reviews, setReviews] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);
  const [allHeroes, setAllHeroes] = useState([])

  useEffect(() => {
    fetch('/me')
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        if (data.error) {
          setLoggedIn(false)
        } else {
          setLoggedIn(true);
          fetchReviews()
          fetchSuperHeroes()
        }
      });
  }, []);

  const fetchReviews = () => {
    fetch('/all_reviews')
    .then(res => res.json())
    .then(data => {
      setReviews(data)
    })
  }

  const fetchSuperHeroes = () => {
    fetch('/all_heroes')
    .then(res => res.json())
    .then(data => {
      setAllHeroes(data)
    })
  }

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const addReview = (review) => {
    fetch('/create_review',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonn'
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      setReviews([...reviews, data]);
    })
  }
  
  return (
    <UserContext.Provider value={{ user, loggedIn, reviews, allHeroes, login, logout, signup, addReview }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
