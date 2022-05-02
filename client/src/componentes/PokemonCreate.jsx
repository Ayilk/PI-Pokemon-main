import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTipos, postPokemon } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function PokemonCreate(){
    const dispatch = useDispatch();
    const types = useSelector( state => state.types);
    const [ input, setInput ] = useState({
        name: "", imagen: "", types: [], id:"", hp:"", 
        attack:"", defense: "",  height: "", weight:""
    })

    useEffect(()=> {
        dispatch(getTipos())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [ e.target.name ] : e.target.value
        })
    }

    return ( 
        <div>
            <h1>Crea tu Pokemon!!</h1>
            <form>
                
                <label>Nombre</label>
                <input type="text" value={input.name} name="name" placeholder="Nombre" onChange={e => handleChange(e)}/>

                <label>ID</label>
                <input type='number' vallue={input.id} name="id" placeholder="ID" />

                <label>Vida</label>
                <input type='number' vallue={input.hp} name="hp" placeholder="VIda" />

                <label>Fuerza</label>
                <input type='number' vallue={input.attack} name="attack" placeholder="Fuerza" />
               
                <label>Defensa</label>
                <input type='number' vallue={input.defense} name="defense" placeholder="Defensa" />

                <label>Altura</label>
                <input type='number' vallue={input.height} name="height" placeholder="Altura" />

                <label>Peso</label>
                <input type='number' vallue={input.weight} name="weight" placeholder="Peso" />

                <label>Imagen</label>
                <input type='text' vallue={input.imagen} name="Imagen" placeholder="url" />
                
                <label>Tipo</label>
                {/* <select>
                {
                    types.map(tipo => (
                        <option value={tipo.name}>{tipo.name}</option>
                    ))
                }
                </select> */}
                <button type='submit'>Crear Pokemon!!</button>
            </form>
           <Link to='/home'><button>Volver</button></Link>
        </div>
    )
}

 
 
 
  