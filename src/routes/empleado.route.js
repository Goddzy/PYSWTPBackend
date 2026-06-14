const empleadoCtrl = require('../controllers/empleado.controller');
const express = require('express');
const router = express.Router();

router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleado);
router.get('/:id', empleadoCtrl.getEmpleado);

module.exports = router;