import React, { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailPokemon, clearDetailsState, trueLoader } from '../actions';
import { capitalizarPrimeraLetra } from '../utils';
import loading from '../imagenes/loading1.gif'


export default function Detail(props){
    console.log(props);

    const dispatch = useDispatch();
    const myPokemon = useSelector(state => state.detail);
    const loader = useSelector(state => state.loader);

    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetailPokemon(id));
        dispatch(clearDetailsState());
        dispatch(trueLoader());
    }, [dispatch, id])

    return(
        <div>
            {
                myPokemon.length > 0 ?
                <div>
                    <div>Nombre:{myPokemon[0].name}</div>
                    <div>Número de Pokemon:{myPokemon[0].id}</div>
                    <div><img src={myPokemon[0].imagen} alt="Imagen" /></div>
                    <div>Vida:{myPokemon[0].hp}</div>
                    <div>Fuerza:{myPokemon[0].attack}</div>
                    <div>Defensa:{myPokemon[0].defense}</div>
                    <div>Altura:{myPokemon[0].height}</div>
                    <div>Peso:{myPokemon[0].weight}</div> 
                    <div>Velocidad:{myPokemon[0].speed}</div>                   
                    <div>Tipo: {myPokemon[0].types?.map((type) => {
                           return ( type.name? capitalizarPrimeraLetra(type.name): capitalizarPrimeraLetra(type));}).join(", ")}</div>
                </div> : loader ?  <div><img src={loading} alt ="loading"/> <h1>Cargando</h1></div> : null 
            }
        <Link to='/home'><button>Volver</button></Link>
            
        </div>
    )
}


