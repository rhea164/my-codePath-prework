import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/Card.jsx';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*');
      if (error) {
        console.error(error);
      } else {
        setCreators(data);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div>
      <h1>Creatorverse</h1>
      {creators.length > 0 ? (
        creators.map(creator => (
          <Card
            key={creator.id}
            id={creator.id}
            name={creator.name}
            url={creator.url}
            description={creator.description}
            imageURL={creator.imageURL}
          />
        ))
      ) : (
        <p>No creators found.</p>
      )}
      <a href="/add">Add New Creator</a>
    </div>
  );
};

export default ShowCreators;
