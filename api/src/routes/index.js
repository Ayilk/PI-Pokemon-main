const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRouter = require('./Pokemon');
const typeRouter = require('./Type');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 router.use('/pokemon', pokemonRouter);
// router.use('/type', typeRouter);

router.use('/', (req, res) => {
    res.status(200).send({message: "Ruta principal conectada exitosamente"})
})

module.exports = router;
