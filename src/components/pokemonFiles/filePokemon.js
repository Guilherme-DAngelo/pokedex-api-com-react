import React, { useState } from "react";
import { Search, SearchContainer, InputSearch, ButtonSearch, GitPokemon, GitPoke, GitPokemon2 } from "./style"


const FilePokemon = (props) => {
    const [search, setSearch] = useState('ditto')
    const { onSearch } = props
        ;
    const onChangeHandler = (e) => {
        setSearch(e.target.value.toLowerCase());
        const searchText = e.target.value;

        if (searchText.length === 0) {
            onSearch(undefined);
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search);
    }

    const onKeyPressHandler = (e) => {
        if (e.key === 'Enter') {
            onButtonClickHandler();
        }
    };

    return (
        <SearchContainer >

            <Search>
                <div>
                    <GitPokemon alt="gifPokemon "
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif" />
                    <GitPokemon2 alt="gifPokemon "
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" />
                    <GitPoke alt="gifPokemon "
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" />

                </div>


                <InputSearch
                    placeholder="Search by Pokémon or ID"
                    type="text"
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler} />
                <ButtonSearch onClick={onButtonClickHandler}>Search</ButtonSearch>
            </Search>

        </SearchContainer>
    )
}

export default FilePokemon;