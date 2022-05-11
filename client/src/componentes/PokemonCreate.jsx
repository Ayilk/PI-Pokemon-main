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
            <h1>Crea tu Pokemon!!</h1>
            <form className='form' onSubmit={e => handleSubmit(e)}>
                
                <label>Nombre</label>
                <input type="text" value={input.name} name="name" placeholder="Nombre" onChange={e => handleChange(e)}/>
                {errors.name && (<p>{errors.name}</p>)}

                <label>Vida</label>
                <input type='number' vallue={input.hp} name="hp" placeholder="VIda" onChange={e => handleChange(e)}/>
                {errors.hp && (<p>{errors.hp}</p>)}

                <label>Fuerza</label>
                <input type='number' vallue={input.attack} name="attack" placeholder="Fuerza" onChange={e => handleChange(e)}/>
                {errors.attack && (<p>{errors.attack}</p>)}
               
                <label>Defensa</label>
                <input type='number' vallue={input.defense} name="defense" placeholder="Defensa" onChange={e => handleChange(e)}/>
                {errors.defense && (<p>{errors.defense}</p>)}

                <label>Velocidad</label>
                <input type='number' vallue={input.speed} name="speed" placeholder="Velocidad" onChange={e => handleChange(e)}/>
                {errors.speed && (<p>{errors.speed}</p>)}

                <label>Altura</label>
                <input type='number' vallue={input.height} name="height" placeholder="Altura" onChange={e => handleChange(e)}/>
                {errors.height && (<p>{errors.height}</p>)}

                <label>Peso</label>
                <input type='number' vallue={input.weight} name="weight" placeholder="Peso" onChange={e => handleChange(e)}/>
                {errors.weight && (<p>{errors.weight}</p>)}

                <label>Imagen</label>
                <input type='text' vallue={input.imagen} name="imagen" placeholder="url" onChange={e => handleChange(e)}/>
                
                <label>Tipo</label>
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
           <Link to='/home'><button>Volver</button></Link>
        </div>
    )
}

 
 
 
  