import React from 'react';

import './Card.css';

const Card = ({ name }) => {
  return (
    <div className="card">
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        alt={name}
      />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
