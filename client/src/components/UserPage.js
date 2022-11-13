import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`${id}`).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setLoading(false);
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (errors) return <h1>{errors}</h1>;
  return (
    <div>
      <h1>{user.username}</h1>
      <h3>My Superhero Reviews</h3>
      <ul>
        {user.reviews.map((review) => (
          <li>
            <h2>{review.superhero.alias}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
