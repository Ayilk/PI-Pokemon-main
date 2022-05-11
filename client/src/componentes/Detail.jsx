import React, { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailPokemon, clearDetailsState, trueLoader } from '../actions';
import { capitalizarPrimeraLetra } from '../utils';
import loading from '../imagenes/loading1.gif';
import '../Estilos/Detail.css';


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
        <div className='contenedor-detail'>
            {
                myPokemon.length > 0 ?
                <div className='contenedor-info'>
                    <div className='imagen-detail'><img src={myPokemon[0].imagen} alt="Imagen" /></div>
                    <div className='items-info'>
                        <div className='it'>Nombre:{capitalizarPrimeraLetra(myPokemon[0].name)}</div>
                        <div className='it'>Número de Pokemon:{myPokemon[0].id}</div>                    
                        <div className='it'>Vida:{myPokemon[0].hp}</div>
                        <div className='it'>Fuerza:{myPokemon[0].attack}</div>
                        <div className='it'>Defensa:{myPokemon[0].defense}</div>
                        <div className='it'>Altura:{myPokemon[0].height}</div>
                        <div className='it'>Peso:{myPokemon[0].weight}</div> 
                        <div className='it'>Velocidad:{myPokemon[0].speed}</div>                   
                        <div className='it'>Tipo: {myPokemon[0].types?.map((type) => {
                            return ( type.name? capitalizarPrimeraLetra(type.name): capitalizarPrimeraLetra(type));}).join(", ")}</div>
                    </div>       
                </div> : loader ?  <div><img className='imagen-loader' src={loading} alt ="loading"/> <h1>Cargando . . .</h1></div> : null 
            }
        <Link to='/home'><button>Volver</button></Link>
            
        </div>
    )
}


