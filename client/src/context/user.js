import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [allReviews, setAllReviews] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [errors, setErrors] = useState([]);

  const session_endpoint = '/session';

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(session_endpoint).catch(handleError);
        // if (response.ok) {
        const data = await response.json();
        console.log({ data });
        // }
        if (data.error) {
          handleError(data.error);
        } else {
          ctxSetUserAndLogin(data)
        }
      } catch (error) {
        handleError(error);
      }
    })();

    function handleError(error) {
      const errorsCopy = [...errors, error];
      setErrors(errorsCopy);
    }
  }, [session_endpoint, errors]);

  useEffect(() => {
    fetch('/all_reviews')
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data);
      });
  }, []);

  useEffect(() => {
    fetch('/all_heroes')
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
      });
  }, []);

  const login = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };

  const ctxSetUserAndLogin = (user) => {
    setUser(user);
    setIsLoggedIn(true);
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
        setHeroes([...heroes, data]);
      });
  };

  const addReview = (review) => {
    fetch('/create_review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllReviews([...allReviews, data]);
      });
  };
 
  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        heroes,
        allReviews,
        errors,
        login,
        logout,
        addSuperHero,
        addReview,
        ctxSetUserAndLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
