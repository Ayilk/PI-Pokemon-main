const axios = require ('axios');
const { Type } = require('../db')


const getTypes = async (req, res, next) => {
    const tiposUrl = await axios.get("https://pokeapi.co/api/v2/type")// [{name, url}, {name, url}, {name, url}, ..]
    const results = tiposUrl.data.results.map(el => el.name) 
    results.forEach(name => {
        Type.findOrCreate({
            where: {name: name}
        }          
     )})
     const allTipos = await Type.findAll()    
     res.send(allTipos)   
}

module.exports = {
    getTypes
}
