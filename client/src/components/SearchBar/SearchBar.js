import React from 'react';

import './SearchBar.css';

const SearchBar = ({ filterPokemonHandler }) => {
  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        type="text"
        placeholder="Search by Pokemon name"
        onChange={(e) => filterPokemonHandler(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
