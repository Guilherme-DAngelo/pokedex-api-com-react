import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPokemonData } from "../searchPokemon/searchPokemon";
import { CardImage, BtnX, CardContainer, BtnTypes, ContainerBtn, SelectBtn, ListDetalis, Detalis, Icons, ContainerIcons } from "./style";
import { typeIcons } from "../../themes/typeImages";


export const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState()
    const [list, setList] = useState()
    const [buttonActive, setButtonActive] = useState()

    const { name } = useParams()
    const pokemonDetailsUrl = `https://pokeapi.co/api/v2/pokemon/${name}`

    useEffect(() => {

        const fetchData = async () => {
            const pokemonsData = await getPokemonData(pokemonDetailsUrl)

            if (pokemonsData.sprites.versions['generation-v']['black-white'].animated.front_default !== null) {
                setPokemon({
                    name: pokemonsData.name,
                    image: pokemonsData.sprites.other.dream_world.front_default,
                    types: pokemonsData.types.map(item => item.type.name)
                })
            } else {
                setPokemon({
                    name: pokemonsData.name,
                    image: pokemonsData.sprites.front_default,
                    types: pokemonsData.types.map(item => item.type.name)
                })
            }
        }
        fetchData()
    }, [pokemonDetailsUrl])


    const PokeMoves = async () => {
        const pokemonsData = await getPokemonData(pokemonDetailsUrl)
        const moveNameList = pokemonsData.moves.map(item => item.move.name)

        const movesList = await Promise.all(moveNameList.map(move => {
            const getMovesDetails = async () => {
                const moveData = await getPokemonData(`https://pokeapi.co/api/v2/move/${move}`)
                const filteredDescription = moveData.flavor_text_entries.find(obj => obj.language.name === 'en')

                if (filteredDescription === undefined) {
                    return { name: moveData.name, description: 'No Description' }
                } else {
                    return { name: moveData.name, description: filteredDescription.flavor_text }
                }
            }

            return getMovesDetails()
        }))

        setList(movesList)
        setButtonActive("moves")
    }

    const pokeAbilities = async () => {
        const pokemonsData = await getPokemonData(pokemonDetailsUrl)
        const abilitiesNameList = pokemonsData.abilities.map(item => item.ability.name)

        const abilitiesList = await Promise.all(abilitiesNameList.map(ability => {


            const getAbilityDetails = async () => {
                const abilityData = await getPokemonData(`https://pokeapi.co/api/v2/ability/${ability}`)
                const filteredDescription = abilityData.effect_entries.find(obj => obj.language.name === 'en')

                return {
                    name: abilityData.name,
                    description: filteredDescription.effect
                }
            }

            return getAbilityDetails()
        }))

        setList(abilitiesList)
        setButtonActive("abilities")
    }

    return (
        <CardContainer pokemon={pokemon}>
            {
                pokemon !== undefined ?
                    <>
                        <BtnX href="/"> X </BtnX>

                        <ContainerIcons pokemon={pokemon}>
                            {
                                pokemon.types.length === 2 ?
                                    <>
                                        <Icons alt={pokemon.types[0]} src={typeIcons[pokemon.types[0]]} title={`Pokemon Tipo ${pokemon.types[0]}`} />
                                        <Icons alt={pokemon.types[0]} src={typeIcons[pokemon.types[1]]} title={`Pokemon Tipo ${pokemon.types[1]}`} />
                                    </>
                                    : <Icons alt={pokemon.types[0]} src={typeIcons[pokemon.types[0]]} title={`Pokemon Tipo ${pokemon.types[0]}`} />
                            }
                        </ContainerIcons>

                        <CardImage pokemon={pokemon}>
                            <img src={pokemon.image} alt={`imagem do ${pokemon.name}`} />
                            <h1>{pokemon.name}</h1>
                        </CardImage>

                        <ContainerBtn>
                            <BtnTypes pokemon={pokemon} type="button" status={buttonActive === "moves" ? true : false} onClick={PokeMoves}>
                                Moves
                            </BtnTypes>

                            <BtnTypes pokemon={pokemon} type="button" status={buttonActive === "abilities" ? true : false} onClick={pokeAbilities}>
                                Abilities
                            </BtnTypes>
                        </ContainerBtn>

                        <ListDetalis pokemon={pokemon}>
                            {
                                list !== undefined ?
                                    <>
                                        {
                                            list.map((item, index) => {
                                                return (
                                                    <Detalis pokemon={pokemon} key={index}>
                                                        <h3>{item.name}</h3>
                                                        {
                                                            item.description !== undefined ?
                                                                <p> {item.description} </p>
                                                                : " "
                                                        }
                                                    </Detalis>
                                                )
                                            })
                                        }
                                    </>
                                    : <SelectBtn> Press one of the buttons above </SelectBtn>
                            }
                        </ListDetalis>
                    </> : " "
            }
        </CardContainer>
    )
}