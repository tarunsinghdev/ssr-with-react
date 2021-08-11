import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import SearchBar from '../components/SearchBar/SearchBar';

import './HomeScreen.css';

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
      const response = await res.json();
      setPokemons(response.results);
      setFilteredPokemons(response.results);
    };
    fetchPokemon();
  }, []);

  const filterPokemonHandler = (text) => {
    const filterPokemons = pokemons.filter((pok) =>
      pok.name.includes(text.toLowerCase())
    );
    setFilteredPokemons(filterPokemons);
  };

  return (
    <>
      <div className="homescreen__header">
        <h1>Pokemon Database</h1>
        <img
          style={{ width: 50, height: 50 }}
          src="/images/pokeball.svg"
          alt="pokeball"
        />
      </div>
      <SearchBar filterPokemonHandler={filterPokemonHandler} />
      <div className="cards">
        {filteredPokemons?.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
