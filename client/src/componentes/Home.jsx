import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterByType, filterCreated, getPokemons, getTypes, orderByAttack, orderByName, trueLoader } from '../actions';
import Card from './Card';
import Paginado from './Paginado';
import Filtros from './Filtros';
import { capitalizarPrimeraLetra } from '../utils';
import '../Estilos/Home.css';
import refresh from '../imagenes/refresh.png';
import loading from '../imagenes/loading1.gif';

export default function Home(){
    const dispatch = useDispatch();

    const allPokemons = useSelector( state => state.pokemons );
    const allTypes = useSelector( state => state.types );
    const loader = useSelector((state) => state.loader);

    const [ paginaActual, setPaginaActual ] = useState(1);
    const [ pokemonPorPagina, setPokemonPorPagina] = useState(12);
    const [ orden, setOrden ] = useState('');

    const indiceUltimoPokemon = paginaActual*pokemonPorPagina; //1*12 = 12
    const indicePrinmerPokemon = indiceUltimoPokemon-pokemonPorPagina; // 12-12 = 0
    const pokemonActual = allPokemons.slice(indicePrinmerPokemon, indiceUltimoPokemon); // []
    const paginado = (numeroDePagina) => { setPaginaActual(numeroDePagina)}

    useEffect(() => {
        dispatch(trueLoader())
        dispatch(getPokemons())
        dispatch(getTypes())        
    }, [dispatch]);

    function handleClick(e){
        e.preventDefault();
        dispatch(trueLoader());
        dispatch(getPokemons());
    }
    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }
    function handleOrderByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setPaginaActual(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleOrderByAttack(e){
        e.preventDefault(e);
        dispatch(orderByAttack(e.target.value));
        setPaginaActual(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleFilterTypes(e){
        e.preventDefault();
        dispatch(filterByType(e.target.value))
        setPaginaActual(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div className='contenedor-home'>
           
            
            <button onClick= {e => handleClick(e)}>
                <img src={refresh} height='20px' width="20px"/>
            </button>
            
            <Filtros
                handleFilterCreated={handleFilterCreated}
                handleOrderByName={handleOrderByName}
                handleOrderByAttack={handleOrderByAttack}
                handleFilterTypes={handleFilterTypes}
                allTypes={allTypes}
            />
            {loader? <div><img src={loading} alt ="loading"/> <h1>Cargando</h1></div>:
            <div> 
                <ul className='cards'> {
                    pokemonActual?.map(p => {
                        return(
                            <div >
                                <Link to={"/home/"+ p.id}>
                                    <Card 
                                    id={p.id}
                                    name={capitalizarPrimeraLetra(p.name)}
                                    imagen={p.imagen}
                                    types={p.types }
                                    />   
                                </Link>
                            </div>
                        )
                    })
                }
                </ul>   
            </div>          
            }   
            <Paginado
                 pokemonPorPagina={pokemonPorPagina}
                 allPokemons={allPokemons.length}
                 paginado={paginado}
                 paginaActual={paginaActual}
            />     
               
        </div>
    )
}


