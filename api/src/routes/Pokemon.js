const { Router } = require('express');
const router = Router();
const { allPokemon, addPokemon } = require('../Controladores/Pokemon');

router.get('/', allPokemon);
router.get('/:id', allPokemon)
router.post('/', addPokemon)


module.exports = router