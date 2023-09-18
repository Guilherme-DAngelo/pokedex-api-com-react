import React from "react";
import Pokemon from "../pokemon/pokemon";

import { PokedexGrid } from "./style";

const Pokedex = (props) => {
    const { pokemons } = props;

    return (
        <>
            <PokedexGrid>
                {pokemons && pokemons.map((pokemon, index) => {
                    return (
                        <Pokemon key={index} pokemon={pokemon} />
                    )
                })}
            </PokedexGrid>
        </>
    )
}

export default Pokedex