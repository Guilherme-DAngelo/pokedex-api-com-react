import React from "react";

import { Card, PokeImgContainer, PokeImage, CardTop, NamePokemon, IdPokemon, ImgGif } from "./style"

const Pokemon = (props) => {
    
    const { pokemon } = props;
    return (
        <a href={`/pokemons/${pokemon.name}`}>
            <Card pokemon={pokemon} type={pokemon}>

                <IdPokemon>#{pokemon.id}</IdPokemon>

                <PokeImgContainer pokemon={pokemon}>
                <PokeImage pokemon={pokemon} alt={pokemon.name} src={pokemon.sprites.other.dream_world.front_default} />
                </PokeImgContainer>

                    <CardTop>
                        <NamePokemon>{pokemon.name}</NamePokemon>
                    </CardTop>
               
                <ImgGif alt={pokemon.name} src={pokemon?.sprites?.versions?.["generation-v"]?.["black-white"]
                    ?.animated?.front_default} />

            </Card>
        </a>
    )
}

export default Pokemon;