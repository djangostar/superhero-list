import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/me')
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        data.error ? setLoggedIn(false) : setLoggedIn(true);
      });
  }, []);

  const fetchReviews = () => {
    fetch('/reviews')
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

  return (
    <UserContext.Provider value={{ user, loggedIn, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
