import React from "react";
import { Routes, Route } from 'react-router';
import ListPokemon from "../components/ListPokemon";

export default function MyRoutes(){
    return (
        <Routes>
            <Route path='/list-pokemon' element={<ListPokemon/>} /> 
        </Routes>
    )
}