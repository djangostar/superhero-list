import React from 'react';
// import { UserContext } from '../../context/user'
// import { useNavigate } from 'react-router-dom';
import HeroForm from '../Forms/HeroForm';
// import ReviewForm from '../Forms/ReviewForm';
import HeroCard from '../Heroes/HeroCard'


const HeroContainer = () => {
  // const { heroes } = useContext(UserContext)
  // console.log(heroes)

  // useEffect(() => {
  //   fetch('/all_heroes')
  //     .then((res) => res.json())
  //     .then((data) => setHeroes(data));
  // }, []);

  // const navigate = useNavigate()

  return (
    <div>
      <HeroForm />
      <br/>
      <HeroCard />
    </div>
  );
};

export default HeroContainer;
