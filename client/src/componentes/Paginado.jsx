import React from "react";


export default function Paginado({pokemonPorPagina, allPokemons, paginado, paginaActual,}) {
  const numeroDePagina = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonPorPagina) ; i++) {
    numeroDePagina.push(i);
  }
  return (
    <ul >
      <div >
      <button 
        disabled={paginaActual > 1 ? false : true}
        onClick={() => paginado(1)}
      >
       First
      </button>

      <button
        disabled={paginaActual > 1 ? false : true}
        onClick={() => paginado(paginaActual - 1)}
      >
       Prev 
      </button>

      {numeroDePagina &&
        numeroDePagina.map((number) => (
        
          <li  key={number}>
            <a onClick={() => paginado(number)}>{number}</a>
          </li>
          
        ))}

        <button
        disabled={paginaActual < numeroDePagina.length ? false : true}
        onClick={() => paginado(paginaActual + 1)}
      >
       Next 
      </button>
      
         <button
        disabled={paginaActual < numeroDePagina.length ? false : true}
        onClick={() => paginado(numeroDePagina.length)}
      >
       Last
      </button>
      </div>   
    </ul>
  );
}