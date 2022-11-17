import React from 'react';
import { UserProvider } from './context/user'
import { Routes, Route } from 'react-router-dom';
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
  // const [user, setUser] = useState({});
  // const [reviews, setReviews] = useState([]);
  // const [superheros, setSuperHeros] = useState([]);
  // const [currentUser, setCurrentUser] = useState({});
  // const [errors, setErrors] = useState(false);

  // useEffect(() => {
  //   fetch('/me').then((res) => {
  //     if (res.ok) {
  //       res.json().then((data) => {
  //         setUser(data);
  //         setLoggedIn(true);
  //       });
  //     } else {
  //       res.json().then((data) => setErrors(data.error));
  //       console.log(errors)
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch('/reviews')
  //     .then((res) => res.json())
  //     .then((reviews) => setReviews(reviews));
  // }, []);

  // const navigate = useNavigate();

  // const login = (user) => {
  //   setUser(user);
  //   setLoggedIn(true);
  // };

  // const logoutUser = () => {
  //   fetch('/logout', {
  //     method: 'DELETE',
  //   }).then(() => {
  //     logout()
  //   });
  //   navigate('/');
  // };

  // const signup = (user) => {
  //   setUser(user);
  //   setLoggedIn(true);
  // };

  // const updateUser = (user) => {
  //   setCurrentUser(user);
  //   setLoggedIn(true);
  // };

  // if (errors) return <h1>{errors}</h1>;

  return (
    <div className='App'>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path='/signup'element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/superheroes' element={<HeroContainer />} />
          <Route path='/superheroes/:id' element={<HeroDetails />} />
          <Route path='/superheroes/new' element={<HeroForm />} />
          <Route path='/reviews' element={<ReviewContainer />} />
          <Route path='/reviews/:id' element={<ReviewDetails />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}
export default App;
