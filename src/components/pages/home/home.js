import { useContext } from "react";
import { Menu } from "../menu/menu";
import { PokemonList } from "../../pokemonList/pokemonList";

import { Container } from "./style"
import { ThemeContext } from "../../../context/themeContext";

export const Home = ( ) => {

    const {theme} = useContext(ThemeContext)

    return(
        <Container  theme={theme}>
            <Menu/>
            <PokemonList />
        </Container>
    )
}