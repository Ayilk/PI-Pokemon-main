import React from "react";


export default function Filtros({allTypes, handleFilterCreated, handleOrderByName, handleOrderByAttack, handleFilterTypes}){
    
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
                <select  onChange={e => handleFilterTypes(e)}> // Filtrado por tipos
                    <option value="all"> Todos </option>               
                        {allTypes?.map((t) => (
                        <option key={t.name} value={t.name}> {t.name} </option>))}
                </select>  
                </div>
    )

}