import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [inputText, setInputText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  return (
    <div className="searchbar">
      <form onSubmit={submitHandler}>
        <input
          className="searchbar__input"
          type="text"
          placeholder="Search by Pokemon name"
          onChange={(e) => setInputText(e.target.value)}
        />
        <a onClick={submitHandler} className="searchbar__button">
          Search{' '}
        </a>{' '}
      </form>
    </div>
  );
};

export default SearchBar;
