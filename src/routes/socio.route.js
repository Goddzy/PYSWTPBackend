
const socioCtrl = require('../controllers/socio.controller');

const express = require('express');
const router = express.Router();

router.get('/', socioCtrl.getSocios);
router.post('/', socioCtrl.createSocio);
router.put('/:id', socioCtrl.updateSocio);
router.delete('/:id', socioCtrl.deleteSocio);
router.get('/activos', socioCtrl.getSociosActivos);

router.get('/dni/:dni',socioCtrl.getSocioByDni);
router.get('/num/:numSocio', socioCtrl.getSocioByNumSocio);
router.get('/apellido/:apellido',socioCtrl.getSociosByApellido);

module.exports = router;