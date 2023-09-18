import { Menu } from "../pages/menu/menu"
import { PokemonDetails } from "./details"

import { ThemeContext } from "../../context/themeContext"
import { Container } from "./style"
import { useContext } from "react"

export const Details = ( ) => {
    
    const { theme } = useContext(ThemeContext)

    return(
        <Container theme={theme} >
            <Menu/>
            <PokemonDetails/>
        </Container>
    )
}