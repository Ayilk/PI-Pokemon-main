import axios from 'axios';


export function getPokemons(){
    return async function(dispatch){
        var json = await axios("http://localhost:3001/pokemon")
        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
}

export function getTipos(){
    return async function(dispatch){
        var json = await axios.("http://localhost:3001/types")
        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        })
    }
}

export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByAttack(payload){
    return{
        type: 'ORDER_BY_ATTACK',
        payload
    }
}