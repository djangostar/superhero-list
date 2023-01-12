import React from 'react';
// import { UserContext } from '../../context/user'
// import { useNavigate } from 'react-router-dom';
import ReviewCard from '../Reviews/ReviewCard';
// import ReviewForm from '../Forms/ReviewForm';



const ReviewContainer = () => {
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
      <ReviewCard />
    </div>
  );
};

export default ReviewContainer;
