const initialState = {
    pokemons: [],
    allPokemons: [],
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
        default:
            return state
    }
}

export default rootReducer;
