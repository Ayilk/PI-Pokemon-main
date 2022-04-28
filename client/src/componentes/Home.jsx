import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterCreated, getPokemons } from '../actions';
import Card from './Card';
import Paginado from './Paginado';
import Filtros from './Filtros';

export default function Home(){
    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons);
    const [ paginaActual, setPaginaActual ] = useState(1);
    const [ pokemonPorPagina, setPokemonPorPagina] = useState(12);
    const indiceUltimoPokemon = paginaActual*pokemonPorPagina; //1*12 = 12
    const indicePrinmerPokemon = indiceUltimoPokemon-pokemonPorPagina; // 12-12 = 0
    const pokemonActual = allPokemons.slice(indicePrinmerPokemon, indiceUltimoPokemon); // []
    const paginado = (numeroDePagina) => { setPaginaActual(numeroDePagina)}

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());
    }
    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

    return (
        <div>
            <Link to='/pokemon'>Crear pokemon</Link>
            <button onClick= {e => handleClick(e)}>
                Volver a cargar todos los pokemons
            </button>
            <Filtros
                handleFilterCreated={handleFilterCreated}
            />
            
                {
                    pokemonActual?.map(p => {
                        return(
                            <div>
                                <Link to={"/home/"+ p.id}>
                                    <Card 
                                       name={p.name}
                                       imagen={p.imagen}
                                       types={p.types}
                                    />   
                                </Link>
                            </div>
                        )
                    })
                }

            
            <Paginado
                 pokemonPorPagina={pokemonPorPagina}
                 allPokemons={allPokemons.length}
                 paginado={paginado}
            />     
        </div>
    )
}
