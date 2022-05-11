import React from "react";
import SearchBar from "./SearchBar";
import '../Estilos/Filtros.css';

export default function Filtros({allTypes, handleFilterCreated, handleOrderByName, handleOrderByAttack, handleFilterTypes}){
    
    return(
        <div className="contenedor-filtros">
               <ul className="listado">
                   <li >
                    <select  className="items" onChange={e => handleOrderByName(e)}> //Orden Alfabético
                        <option>Ordenar por Orden Alfabético</option>
                        <option value='asc'>A-Z</option>
                        <option value='desc'>Z-A</option>
                    </select>
                   </li>
                   <li >
                    <select className="items" onChange={e => handleOrderByAttack(e)}> // Orden por Fuerza
                        <option>Ordenar por Fuerza</option>
                        <option value='asc'>Mayor</option>
                        <option value='desc'>Menor</option>
                    </select>
                   </li>
                   <li >
                    <select  className="items" onChange={e => handleFilterCreated(e)}> // Filtrado creado o existente
                        <option>Filtrar por Orígen</option>
                        <option value='All'>Todos</option>
                        <option value='Created'>Creados</option>
                        <option value='Api'>Existentes</option>
                    </select>
                   </li>
                   <li >
                    <select className="items" onChange={e => handleFilterTypes(e)}> // Filtrado por tipos
                        <option value="all"> Filtrar por Tipos   </option>               
                            {allTypes?.map((t) => (
                            <option key={t.name} value={t.name}> {t.name} </option>))}
                    </select>  
                   </li>
                   <li ><SearchBar /></li>
                
                
                
                
                
                </ul> 
        </div>
    )

}