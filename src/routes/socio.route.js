
const socioCtrl = require('../controllers/socio.controller');

const express = require('express');
const router = express.Router();

router.get('/', socioCtrl.getSocios);
router.post('/', socioCtrl.createSocio);
router.put('/:id', socioCtrl.updateSocio);
router.delete('/:id', socioCtrl.deleteSocio);
router.get('/activos', socioCtrl.getSociosActivos);


module.exports = router;