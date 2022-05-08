import React from "react";
import { capitalizarPrimeraLetra } from "../utils"


export default function Card ({name, imagen, types}){
    return(
        <div>
            <div>{name}</div>
            <img src={imagen} 
                 alt = "Imagen no encontrada"   
                 height="300px"
                 width="300px"              
            />
            <div> 
                {types?.map((type) => { 
                return ( type.name? capitalizarPrimeraLetra(type.name): capitalizarPrimeraLetra(type))}).join(", ")}
            </div>     
        </div>
    )
}