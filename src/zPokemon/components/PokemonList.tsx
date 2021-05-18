import { useEffect, useState } from "react";
import { Species } from "../model/pokemon-model";
import { fetchAllSpecies } from "../service/PokemonApiService";

function PokemonList() {
    const [ species, setSpecies ] = useState<Species[]>([]);
    useEffect(() => {
        // call the API
        fetchAllSpecies().then(data => {
          // When data comes back, set the state.
          setSpecies(data);
        });
      }, []);

    return (    

        <div className="PokemonList">

            <h2>Pokemon List</h2>
                <ol>
                    { species.map((pokemon, index ) => 
                    <li key = { index }>{ pokemon.name }</li> )}
                </ol>
        </div>
    )
}

export default PokemonList;