import React from "react";
import { ImgLogo } from "../menu/style"


export const Logo = () => {

    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <>
            <ImgLogo alt="pokeapi-logo" src={logoImg} />
        </>
    )
}