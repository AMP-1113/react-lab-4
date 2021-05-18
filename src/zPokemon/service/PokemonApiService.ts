import { Species, PokemonResponse } from '../model/pokemon-model'

export function fetchAllSpecies(): Promise<Species[]> {
    return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then((data: PokemonResponse) => {
      return data.results;
    });
  }