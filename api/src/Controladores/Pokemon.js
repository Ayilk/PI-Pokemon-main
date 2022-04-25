const axios = require('axios');
const { Pokemon, Type } = require('../db');

const pokemonApi = (req, res, next) => {    
    axios.get('https://pokeapi.co/api/v2/pokemon') // Me trae un ojeto con {count, next, prevoous, results} = r.data
    .then(r => {           
    const dat = r.data.results.map(el => axios.get(el.url))// results = [{}, {},...] results.map => Me trae un arreglo de peticiones[axios.get(),axios.get,...]
        Promise.all(dat).then(                                 //Le paso ese arreglo de peticiones al Promise.all
           peticiones => {                                    
               const pokemon = peticiones.map(url => {        // Cada petición tiene una url que me da acceso a la información de cada pokemon
                   const p=url.data
                   return{
                   name: p.name,
                   hp: p.stats[0].base_stat,
                   attack: p.stats[1].base_stat,
                   defense: p.stats[2].base_stat,
                   speed: p.stats[5].base_stat,
                   height: p.height,
                   wieght: p.wieght,
                   image: p.sprites.other.dream_world.front_default,
                   types: p.types.map(el=> el.type.name)                    
               }})                
               res.send(pokemon)
           }
       )
    })
    
}   


  
     
    


module.exports = {
    pokemonApi
}


