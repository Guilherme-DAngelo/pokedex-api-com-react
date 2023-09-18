import { BrowserRouter, Route, Routes } from "react-router-dom";  

import { Home } from "../components/pages/home/home";
import { Details } from "../components/pokemonCards/index";

export const AppRoutes = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="pokemons/:name" element={< Details />} />
        </Routes>
    </BrowserRouter>


)