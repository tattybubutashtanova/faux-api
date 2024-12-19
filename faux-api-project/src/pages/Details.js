import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchData } from '../services/api';

const Details = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchData().then((data) => {
      const foundItem = data.find((item) => item.id === parseInt(id));
      setItem(foundItem);
    });
  }, [id]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {item ? (
        <>
          <h1>{item.title || item.name}</h1>
          <p>{item.body || 'No additional details available.'}</p>
          <Link to="/">Back to Home</Link>
        </>
      ) : (
        <p>Loading details...</p>
      )}
    </div>
  );
};

export default Details;
