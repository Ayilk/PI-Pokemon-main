import React from "react";

export default function Filtros({handleFilterCreated}){
    return(
        <div>
                <select> //Orden Alfabético
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>
                <select> // Orden por Fuerza
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select onChange={e => handleFilterCreated(e)}> // Filtrado creado o existente
                    <option value='All'>Todos</option>
                    <option value='Created'>Creados</option>
                    <option value='Api'>Existentes</option>
                </select>
                </div>
    )

}