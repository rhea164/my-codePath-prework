import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        console.error(error);
      } else {
        setCreator(data);
      }
    };
    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <div>
      <h1>{creator.name}</h1>
      <img src={creator.imageURL} alt={creator.name} />
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
    </div>
  );
};

export default ViewCreator;
