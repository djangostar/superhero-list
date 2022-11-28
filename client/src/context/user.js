import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  // const [allReviews, setReviews] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allHeroes, setAllHeroes] = useState([]);
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
        }
      } catch (error) {
        handleError(error);
      }
    })();

    function handleError(error) {
      const errorsCopy = [...errors, error];
      setErrors(errorsCopy);
    }
    // fetch(session_endpoint).then((res) => {
    //   if (res.ok) {
    //     res.json().then((data) => {
    //       setUser(data);
    //       fetchSuperHeroes();
    //       data.error ? setIsLoggedIn(false) : setIsLoggedIn(true);
    //     });
    //   } else {
    //     res.json().then((data) => setErrors(data.error));
    //   }
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const fetchReviews = () => {
  //   fetch('/all_reviews')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setReviews(data);
  //     });
  // };

  const fetchSuperHeroes = () => {
    fetch('/all_heroes')
      .then((res) => res.json())
      .then((data) => {
        setAllHeroes(data);
      });
  };

  const login = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };


  const ctxSetUserAndLogIn = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  }

  // const addReview = (review) => {
  //   fetch('/create_review', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/jsonn',
  //     },
  //     body: JSON.stringify(review),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setReviews([...allReviews, data]);
  //     });
  // };

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
        setAllHeroes([...allHeroes, data]);
      });
  };

  // if (errors) return <h1>{errors}</h1>;
  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        // allReviews,
        allHeroes,
        errors,
        login,
        logout,
        addSuperHero,
        ctxSetUserAndLogIn
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
