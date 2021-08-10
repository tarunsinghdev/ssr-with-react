import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';

const HomeScreen = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default HomeScreen;
