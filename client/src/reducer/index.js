const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: [],
    loader: true,
}

function rootReducer (state=initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            return {
                ...state,
                loader: false,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        case 'FILTER_CREATED':
            const allPokemonss = state.allPokemons;
            const filterCreated = action.payload === 'Created'? 
                                  allPokemonss.filter(el => el.createInDb):
                                  allPokemonss.filter(el => !el.createInDb)
            return {
               ...state,
               pokemons: action.payload === 'All'? state.allPokemons : filterCreated
            }
        case 'ORDER_BY_NAME':
            let sorted = action.payload === 'asc'?
                     state.pokemons.sort(function(a,b){
                         if(a.name > b.name){return 1}
                         if(b.name > a.name){return -1}
                         return 0
                     }) :
                     state.pokemons.sort(function(a,b){
                        if(a.name > b.name){return -1}
                        if(b.name > a.name){return 1}
                        return 0
                     })     
                return{
                    ...state,
                    pokemons: sorted
                } 
        case 'ORDER_BY_ATTACK':
                let sortedd = action.payload === 'asc'?
                state.pokemons.sort((a,b) => a.attack - b.attack) : state.pokemons.sort((a,b) => b.attack-a.attack);
                return{
                    ...state,
                    pokemons: sortedd
                } 
        case 'GET_NAME_POKEMON':
                return{
                    ...state,
                    pokemons: action.payload
                } 
        case 'POST_POKEMON':
                return {
                    ...state
                }  
        case 'GET_DETAIL':
                return{
                    ...state,
                    detail: action.payload
                } 
        case 'FILTER_BY_TYPE':
                const allPokemonns = state.allPokemons;            
                let filteredPokemons = action.payload === "all" ? allPokemonns :
                allPokemonns.filter(pokemon => pokemon.types.includes(action.payload));
                    return {
                        ...state,
                        pokemons: filteredPokemons,
                    }  
        case 'CLEAR_DETAIL_STATE':                        
                return {
                    ...state,
                    detail: [],
                };
        case "LOADER_TRUE":                        
                return {
                    ...state,
                    loader: true,
                };
        case 'LOADER_FALSE':                                      
                return {
                    ...state,
                    loader: false,
                };              
        default:
            return state
    }
}

export default rootReducer;
