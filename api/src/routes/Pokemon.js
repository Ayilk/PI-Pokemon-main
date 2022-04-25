const { Router } = require('express');
const router = Router();
const { pokemonApi } = require('../Controladores/Pokemon');

router.get('/', pokemonApi);


module.exports = router