import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTypes, postPokemon } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function PokemonCreate(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const types = useSelector( state => state.types);
    const [ input, setInput ] = useState({
        name: "", imagen: "", types: [], id:"", hp:"", speed:"",
        attack:"", defense: "",  height: "", weight:""
    })
    const [errors, setErrors] = useState({});

    const validate = (input) =>{
        let errors = {};
    
      if (!input.name) {
        errors.name = "A name is required";
      } else if (!/^[a-zA-Z]+$/.test(input.name) || input.name.length > 10) {
        errors.name = "Name is invalid";
      }
    
      if (!input.height) {
        errors.height = "height is required";
      } else if (input.height > 200) {
        errors.height = "height is invalid";
      }
    
      if (!input.weight) {
        errors.weight = "weight is required";
      } else if (input.weight > 2000) {
        errors.weight = "weight is invalid";
      }
    
      if (!input.img) {
        errors.img = "an img url is required";
      } else if (!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(input.img)
    ) {errors.img = "url is invalid";}
    
      return errors;
    }

    useEffect(()=> {
        dispatch(getTypes())
    },[dispatch])

    function handleChange(e){
         if (e.target.name === "name" || e.target.name === "img") {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: Number(e.target.value),
      });
    }

    setErrors(
      validate({
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
        <div>
            <h1>Crea tu Pokemon!!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                
                <label>Nombre</label>
                <input type="text" value={input.name} name="name" placeholder="Nombre" onChange={e => handleChange(e)}/>

                <label>ID</label>
                <input type='number' vallue={input.id} name="id" placeholder="ID" onChange={e => handleChange(e)}/>

                <label>Vida</label>
                <input type='number' vallue={input.hp} name="hp" placeholder="VIda" onChange={e => handleChange(e)}/>

                <label>Fuerza</label>
                <input type='number' vallue={input.attack} name="attack" placeholder="Fuerza" onChange={e => handleChange(e)}/>
               
                <label>Defensa</label>
                <input type='number' vallue={input.defense} name="defense" placeholder="Defensa" onChange={e => handleChange(e)}/>

                <label>Velocidad</label>
                <input type='number' vallue={input.speed} name="speed" placeholder="Velocidad" onChange={e => handleChange(e)}/>

                <label>Altura</label>
                <input type='number' vallue={input.height} name="height" placeholder="Altura" onChange={e => handleChange(e)}/>

                <label>Peso</label>
                <input type='number' vallue={input.weight} name="weight" placeholder="Peso" onChange={e => handleChange(e)}/>

                <label>Imagen</label>
                <input type='text' vallue={input.imagen} name="Imagen" placeholder="url" onChange={e => handleChange(e)}/>
                
                <label>Tipo</label>
                <select onChange={e => handleSelect(e)}>
                {
                    types.map((tipo, id) => {
                        return(<option key={id} value={tipo.name}>{tipo.name}</option>)
                    })
                }
                </select>
                <button type='submit'>Crear Pokemon!!</button>
            </form>
           <Link to='/home'><button>Volver</button></Link>
        </div>
    )
}

 
 
 
  