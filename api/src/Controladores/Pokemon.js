const axios = require('axios');
const { Pokemon, Type } = require('../db');



const allPokemon = (req, res, next) => {  
    
    const name = req.query.name
    const id = req.params.id

    const pokemonDb = Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })

   const pokemonApi =  axios.get('https://pokeapi.co/api/v2/pokemon') // Me trae un ojeto con {count, next, prevoous, results} = r.data
   
  return  Promise.all([pokemonDb, pokemonApi]) 
   .then(r => { 
       const [ pokemonDbResults, pokemonApiResults ] = r
        const results1 = pokemonApiResults.data.results
        console.log(pokemonDbResults)
       return axios.get(pokemonApiResults.data.next)
        .then(n => {
            const union = results1.concat(n.data.results)
            const dat = union.map(el => axios.get(el.url))// results = [{}, {},...] results.map => Me trae un arreglo de peticiones[axios.get(),axios.get,...]
               return Promise.all(dat).then(                                 //Le paso ese arreglo de peticiones al Promise.all
                peticiones => {                                    
                    const pokemon = peticiones.map(url => {        // Cada petición tiene una url que me da acceso a la información de cada pokemon
                        const p=url.data
                        return{
                            id: p.id,
                            name: p.name,
                            hp: p.stats[0].base_stat,
                            attack: p.stats[1].base_stat,
                            defense: p.stats[2].base_stat,
                            speed: p.stats[5].base_stat,
                            height: p.height,
                            weight: p.weight,
                            imagen: p.sprites.other.dream_world.front_default,
                            types: p.types.map(el=> el.type.name)                    
                    }})  
                  
                    const pokemons = pokemon.concat(pokemonDbResults)
                  //const pokemons=pokemonDbResults
                    
                    if(id){
                        let pokemonId = pokemons.filter(el => el.id == id);
                        pokemonId.length ? res.status(200).send(pokemonId) : res.status(400).send("Pokemon no encontrado")
                    } 
                    if(name){
                        let pokemonName = pokemons.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
                        pokemonName.length ? res.send(pokemonName) : res.status(400).send("Ese nombre no se encuentra ")
                    }

                    res.send(pokemons)
                }
            )
    
        })
        
     }).catch(error => next(error) )  
}

const addPokemon = async (req, res, next) => {
    const {name, hp, attack, defense, speed, height, weight, imagen, types, createInDb} = req.body;
    const pokemonCreated = await Pokemon.create({
        name, hp, attack, defense, speed, height, weight, imagen, createInDb
    })
    const tipoDb = await Type.findAll({
        where: {
            name: types
        }
    })
    pokemonCreated.addType(tipoDb);
    res.send("Pokemon creado con éxito")
}

const pokemonDelete = (req, res, next) => {
    const id = req.params.id;
    return Pokemon.destroy({
        where: {
            id
        }
    }).then(() => {res.status(200).send("Pokemón eliminado con éxito")})
    .catch(error => next(error))
}

module.exports = {
    allPokemon,
    addPokemon,
    pokemonDelete
}
