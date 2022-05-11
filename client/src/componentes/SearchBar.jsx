import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemon } from '../actions';
import '../Estilos/SearchBar.css'

export default function SearchBar(){
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNamePokemon(name))
    }

    return(
        <form className='searchContainer'>
           <div className='searchBox'>
            <input 
               className='searchBox'
               type='text'
               placeholder='Pokemon...'
               onChange={e => handleInputChange(e)}
            />
            <button 
               className='searchButton'
               type='submit'
               onClick={e => handleSubmit(e)} 
            >
               Buscar 
            </button>     
        </div>
        </form>
        
    )
}