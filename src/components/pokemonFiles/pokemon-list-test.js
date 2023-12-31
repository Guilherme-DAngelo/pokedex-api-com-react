import React from "react"
import "@testing-library/jest-dom"
import { render} from "@testing-library/react"

import FilePokemon from "./filePokemon"

describe("PokemonList", () => {
    it("should render correctly", () => {
        const { screen } = render(<FilePokemon />)

        expect(screen.getByText("Load more Pokémon...")).toBeInTheDocument()
    })
})