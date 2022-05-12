import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTypes, postPokemon } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import '../Estilos/PokemonCreate.css';

export default function PokemonCreate(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const types = useSelector( state => state.types);
    const [ input, setInput ] = useState({
        name: "", imagen: "", types: [], id:"", hp:"", speed:"",
        attack:"", defense: "",  height: "", weight:""
    })
    const [errors, setErrors] = useState({});
    const [disabled, setDisabled] = useState(true);

    const validate = input => {
      let errors = {};
      if (!input.name) errors.name = "Nombre Requerido";
      if (!input.id) errors.id = "Id Requerido";
      if (input.hp < 0) errors.hp = "Inválido!";
      if (input.strength < 0) errors.attack = "Inválido!";
      if (input.defense < 0) errors.defense = "Inválido!";
      if (input.speed < 0) errors.speed = "Inválido!";
      if (input.height < 0) errors.height = "Inválido!";
      if (input.weight < 0) errors.weight = "Inválido!";      
      return errors;
    }

    useEffect(()=> {
        dispatch(getTypes())
    },[dispatch])

    useEffect(() => {
      if (
        input.name.length > 0 &&        
        input.types.length < 3 &&        
        !errors.hasOwnProperty("hp") &&
        !errors.hasOwnProperty("attack") &&
        !errors.hasOwnProperty("defense") &&
        !errors.hasOwnProperty("speed") &&
        !errors.hasOwnProperty("height") &&
        !errors.hasOwnProperty("weight")
      ) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }, [errors, input, setDisabled]);

    function handleChange(e){
        setInput({
          ...input,
          [ e.target.name ] : e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
    }

    function handleSelect(e){
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
        setErrors(validate({
          ...input,
          [e.target.name] : e.target.value
        }))
    }
    function handleDeleteX(el) {
      setInput({
        ...input,
        types: input.types.filter((occ) => occ !== el),
      });
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postPokemon(input))
        alert("Personaje creado");
        setInput({
            name: "", imagen: "", types: [], id:"", hp:"", speed:"",
            attack:"", defense: "",  height: "", weight:""
        })
        navigate('/home')
    }

    return ( 
        <div className='contenedor-creation'>
          <Link to='/home'><button className='volver'>Volver</button></Link>
            <h1>Crea tu Pokemon!!</h1>
            <div className='contenedor-form'>
            <form  className='form' onSubmit={e => handleSubmit(e)}>
                
                <label className='label'>Nombre</label>
                <input className='input-form' type="text" value={input.name} name="name" placeholder="Nombre" onChange={e => handleChange(e)}/>
                {errors.name && (<p className='error-form'>{errors.name}</p>)}

                <label  className='label'>Vida</label>
                <input className='input-form' type='number' vallue={input.hp} name="hp" placeholder="VIda" onChange={e => handleChange(e)}/>
                {errors.hp && (<p className='error-form'>{errors.hp}</p>)} 

                <label  className='label'>Fuerza</label>
                <input  className='input-form' type='number' vallue={input.attack} name="attack" placeholder="Fuerza" onChange={e => handleChange(e)}/>
                {errors.attack && (<p className='error-form'>{errors.attack}</p>)}
               
                <label  className='label'>Defensa</label>
                <input  className='input-form' type='number' vallue={input.defense} name="defense" placeholder="Defensa" onChange={e => handleChange(e)}/>
                {errors.defense && (<p className='error-form'>{errors.defense}</p>)}

                <label  className='label'>Velocidad</label>
                <input  className='input-form' type='number' vallue={input.speed} name="speed" placeholder="Velocidad" onChange={e => handleChange(e)}/>
                {errors.speed && (<p className='error-form'>{errors.speed}</p>)}

                <label  className='label'>Altura</label>
                <input className='input-form' type='number' vallue={input.height} name="height" placeholder="Altura" onChange={e => handleChange(e)}/>
                {errors.height && (<p className='error-form'>{errors.height}</p>)}

                <label  className='label'>Peso</label>
                <input className='input-form' type='number' vallue={input.weight} name="weight" placeholder="Peso" onChange={e => handleChange(e)}/>
                {errors.weight && (<p className='error-form'>{errors.weight}</p>)}

                <label  className='label'>Imagen</label>
                <input className='input-form' type='text' vallue={input.imagen} name="imagen" placeholder="url" onChange={e => handleChange(e)}/>
                
                <label  className='label'>Tipo</label>
                <select onChange={e => handleSelect(e)}>
                {
                    types.map((tipo, id) => {
                        return(<option key={id} value={tipo.name}>{tipo.name}</option>)
                    })
                    
                }
                {
                    input.types.length > 2 ? (<p>Seleccione Máximo 2 Tipos</p>) : null
                }
                </select>
                <div >
                  {input.types.map((el) => (
                    <div key={el}>
                      <button type="button" onClick={() => handleDeleteX(el)}>
                        X
                      </button>
                      <p>{el}</p>
                    </div>
                  ))}
                </div>  
                <button type='submit' disabled={disabled}>Crear Pokemon!!</button>
            </form>
            </div>
           
        </div>
    )
}

 
 
 
  