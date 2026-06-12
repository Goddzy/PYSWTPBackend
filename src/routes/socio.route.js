
const socioCtrl = require('../controllers/socio.controller');

const express = require('express');
const router = express.Router();

router.get('/', socioCtrl.getSocios);
router.post('/', socioCtrl.createSocio);


module.exports = router;