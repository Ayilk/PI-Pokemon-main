const initialState = {
    pokemons: [],
    allPokemons: [],
    types: []
}

function rootReducer (state=initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload
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
        default:
            return state
    }
}

export default rootReducer;
