import React from "react";
import { ContainerButton, BtnMaisPokemon } from "./style"

export const Button = (props) => {

    return (
        <ContainerButton>
            <BtnMaisPokemon
                {...props} > More Pokémons
            </BtnMaisPokemon>
        </ContainerButton>
    )
}
