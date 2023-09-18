import React, { useEffect, useState } from "react";
import FilePokemon from "../pokemonFiles/filePokemon"
import Pokedex from "../pokedex/pokedex"
import {
  SearchPokemon,
  getPokemonData,
  getPokemons
} from "../searchPokemon/searchPokemon";
import { Button } from "../buttons/button"


import { Close, DivError, Gif, TextError } from "./style";
import { Main } from "../pages/main/style";

export const PokemonList = () => {
  const paginationLimit = 10;
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [paginationOffset, setPaginationOffset] = useState(0);

  const addPokemons = () => {
    setPaginationOffset(paginationOffset + paginationLimit)
    console.log("offset", paginationOffset);
  };


  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setNotFound(false);
        const data = await getPokemons(paginationLimit, paginationOffset);
        const promises = data.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });

        const results = await Promise.all(promises);
        setPokemons([...pokemons, ...results]);

      } catch (error) {
        console.log("error", error);
      }
    };

    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationOffset]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      if (paginationOffset > 0) {
        setPaginationOffset(0);
      } else {

        return;
      }
    } else {
      setNotFound(false);

      const result = await SearchPokemon(pokemon);
      if (!result) {
        setNotFound(true);
      } else {
        setPokemons([result]);
      }
    }
  };

  return (
    <>
      <FilePokemon onSearch={onSearchHandler} />
      {notFound ? (

        <DivError >
          <Gif alt="gif pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/122.gif" />
          <TextError>
          Yikes, there's no such Pokémon!
          </TextError>
          <Gif alt="gifPokemon "
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/202.gif" />
          
          <Close href="/" > X </Close>
        </DivError>

      ) : (

        <Main>
          <Pokedex pokemons={pokemons} />
          <Button onClick={addPokemons} />
        </Main>

      )}

    </>
  );
}