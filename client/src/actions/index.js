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

export function getTypes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/types")
        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        })
    }
}

export function getNamePokemon(name){
    return async function(dispatch){
        var json = await axios("http://localhost:3001/pokemon?name=" + name)
        return dispatch({
            type: 'GET_NAME_POKEMON',
            payload: json.data
        })
    }
}
export function getDetailPokemon(id){
    return async function(dispatch){
        var json = await axios("http://localhost:3001/pokemon/"+ id);
        return dispatch({
            type: 'GET_DETAIL',
            payload: json.data
        })
    }
}
export function postPokemon(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/pokemon", payload);
        return response;
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

export function filterByType(payload){
    return{
        type: 'FILTER_BY_TYPE',
        payload
    }
}


export function clearDetailsState() {
    return {
      type: 'CLEAR_DETAIL_STATE',
    };
  }
  
  
  export function trueLoader() {
    return {
      type: "LOADER_TRUE",
    };
  }
  
  
  export function falseLoader() {
    return {
      type: 'LOADER_FALSE',
    };
  }