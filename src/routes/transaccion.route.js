const transaccionCtrl = require('../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/:email', transaccionCtrl.getTransaccionByClientEmail);
router.get('/:idiomaOrigen/:idiomaDestino', transaccionCtrl.getTransaccionIdiomaOrigenAndDestino);

module.exports = router;