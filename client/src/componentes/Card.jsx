import React from "react";


export default function Card ({name, imagen, types}){
    return(
        <div>
            <h3>{name}</h3>
            <img src={imagen} 
                 alt = "Imagen no encontrada"
                 width="200px"
                 height="250px"
            />
            <h5> {types?.map((type) => {
                return (
                  <p key={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </p>
                );
              })}
            </h5>     
        </div>
    )
}