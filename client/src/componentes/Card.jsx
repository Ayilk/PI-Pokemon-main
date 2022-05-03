import React from "react";
import {capitalizarPrimeraLetra} from "../utils"


export default function Card ({name, imagen, types}){
    return(
        <div>
            <div>{name}</div>
            <img src={imagen} 
                 alt = "Imagen no encontrada"                 
            />
            <div> {types?.map((type) => { 
                return ( capitalizarPrimeraLetra(type))}).join(", ")}
            </div>     
        </div>
    )
}