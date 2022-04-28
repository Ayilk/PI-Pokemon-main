const { Router } = require('express');
const router = Router();
const { allPokemon, addPokemon, pokemonDelete } = require('../Controladores/Pokemon');

router.get('/', allPokemon);
router.get('/:id', allPokemon)
router.post('/', addPokemon)
router.delete('/:id', pokemonDelete)


module.exports = router