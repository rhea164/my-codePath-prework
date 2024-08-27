import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <div className="creator-card">
      {imageURL && <img src={imageURL} alt={name} />}
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
      <Link to={`/edit/${id}`}>Edit</Link>
      <Link to={`/view/${id}`}>View Details</Link>
    </div>
  );
};

export default Card;
