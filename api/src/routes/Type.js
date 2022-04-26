const { Router } = require('express');
const router = Router();
const { getTypes } = require('../Controladores/Type');



router.get('/', getTypes);

module.exports = router;