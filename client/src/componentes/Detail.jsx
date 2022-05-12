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
            <Link to='/home'><button className='volver'>Volver</button></Link>
            {
                myPokemon.length > 0 ?
                <div className='contenedor-info'>
                    <div className='imagen-detail'><img src={myPokemon[0].imagen} alt="Imagen" /></div>
<table className='table' >  
   <tbody>
    <tr >
      <th ><h3>Nombre</h3></th>
      <td> <h1>{capitalizarPrimeraLetra(myPokemon[0].name)}</h1></td>      
    </tr>
    <tr>
      <th><h3>Número de Pokemon: </h3></th>
      <td> <h3>{myPokemon[0].id}</h3></td>      
    </tr>
    <tr>
      <th><h3>Vida</h3></th>
      <td> <h3>{myPokemon[0].hp}</h3></td>      
    </tr>
    <tr>
      <th><h3>Fuerza</h3></th>
      <td> <h3>{myPokemon[0].attack}</h3></td>      
    </tr>
    <tr>
      <th><h3>Defensa</h3></th>
      <td> <h3>{myPokemon[0].defense}</h3></td>      
    </tr>
    <tr>
      <th><h3>Altura</h3></th>
      <td> <h3>{myPokemon[0].height}</h3></td>      
    </tr>
    <tr>
      <th><h3>Peso</h3></th>
      <td> <h3>{myPokemon[0].weight}</h3></td>      
    </tr>
    <tr>
      <th><h3>Velocidad</h3></th>
      <td><h3> {myPokemon[0].speed}</h3></td>      
    </tr>
    <tr>
      <th><h3>Tipo</h3></th>
      <td> <h3>{myPokemon[0].types?.map((type) => {
                            return ( type.name? capitalizarPrimeraLetra(type.name): capitalizarPrimeraLetra(type));}).join(", ")}</h3></td>      
    </tr>
    
  </tbody>
</table>
                     
                </div> : loader ?  <div><img className='imagen-loader' src={loading} alt ="loading"/> <h1>Cargando . . .</h1></div> : null 
            }
        
            
        </div>
    )
}


