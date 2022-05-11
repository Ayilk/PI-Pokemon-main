import React from "react";
import '../Estilos/Paginado.css';


export default function Paginado({pokemonPorPagina, allPokemons, paginado, paginaActual,}) {
  const numeroDePagina = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonPorPagina) ; i++) {
    numeroDePagina.push(i);
  }
  return (
    <ul className="ul">
      <div className="div">
          <button 
            className="boton-paginado"
            disabled={paginaActual > 1 ? false : true}
            onClick={() => paginado(1)}
          >
          &lt;&lt;
          </button>

          <button
            className="boton-paginado"
            disabled={paginaActual > 1 ? false : true}
            onClick={() => paginado(paginaActual - 1)}
          >
          &lt; 
          </button>

            {numeroDePagina &&
              numeroDePagina.map((number) => (
              
                <li className="li" key={number}>
                  <a className="link" onClick={() => paginado(number)}>{number}</a>
                </li>
                
              ))}

            <button
            className="boton-paginado"
            disabled={paginaActual < numeroDePagina.length ? false : true}
            onClick={() => paginado(paginaActual + 1)}
          >
          &gt;
          </button>
          
            <button
            className="boton-paginado"
            disabled={paginaActual < numeroDePagina.length ? false : true}
            onClick={() => paginado(numeroDePagina.length)}
          >
          &gt;&gt;
          </button>

      </div>   
    </ul>
  );
}