import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [allReviews, setReviews] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [allHeroes, setAllHeroes] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setUser(data);
          fetchReviews();
          fetchSuperHeroes();
          data.error ? setLoggedIn(false) : setLoggedIn(true);
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  const fetchReviews = () => {
    fetch('/all_reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  };

  const fetchSuperHeroes = () => {
    fetch('/all_heroes')
      .then((res) => res.json())
      .then((data) => {
        setAllHeroes(data);
      });
  };

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
    fetch('/create_review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonn',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews([...allReviews, data]);
      });
  };

  const addSuperHero = (hero) => {
    fetch('/create_hero', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hero),
    })
    .then((res) => res.json())
    .then((data) => {
      setAllHeroes([...allHeroes, data])
    })
  };

  if (errors) return <h1>{errors}</h1>;
  return (
    <UserContext.Provider
      value={{
        user,
        loggedIn,
        allReviews,
        allHeroes,
        errors,
        login,
        logout,
        signup,
        addReview,
        addSuperHero,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
