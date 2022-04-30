import React from "react";

export default function Filtros({handleFilterCreated, handleOrderByName, handleOrderByAttack}){
    return(
        <div>
                <select onChange={e => handleOrderByName(e)}> //Orden Alfabético
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>
                <select onChange={e => handleOrderByAttack(e)}> // Orden por Fuerza
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