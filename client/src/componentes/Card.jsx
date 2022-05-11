import React from "react";
import { capitalizarPrimeraLetra } from "../utils";
import '../Estilos/Card.css'


export default function Card ({name, imagen, types,id}){
    return(
        <div className="contenedor">
           <div><b>#{id}</b></div>
            <img src={imagen} 
                 className="img"
                 alt = "Imagen no encontrada"   
                 height="150px"
                 width="150px"              
            />
            <div><h3>{name}</h3></div>
            
            <div className="types"> 
                {types?.map((type) => { 
                return ( <p className={type}>{type.name? capitalizarPrimeraLetra(type.name): capitalizarPrimeraLetra(type)} </p>) })}
            </div>     
        </div>
    )
}