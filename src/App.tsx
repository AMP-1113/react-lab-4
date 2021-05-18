import React, { useState } from 'react';
import './App.css';
import UserLookUp from './components/UserLookup';
import PokemonList from './zPokemon/components/PokemonList';


function App() {

  return (
    <div className="App">
      {/* < PokemonList /> */}
      < UserLookUp  />
    </div>
  );
}

export default App;
