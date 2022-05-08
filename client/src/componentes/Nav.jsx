import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <Link to='/home'>Entra a la Pokedex</Link>
            <Link to='/pokemon'>Crear pokemon</Link>
           
        </div>
    )
}