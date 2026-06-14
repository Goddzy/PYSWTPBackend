const publicacionCtrl = require('../controllers/publicacion.controller');
const express = require('express');
const router = express.Router();

router.get('/', publicacionCtrl.getPublicaciones);
router.post('/', publicacionCtrl.createPublicacion);
router.put('/:id', publicacionCtrl.updatePublicacion);
router.delete('/:id', publicacionCtrl.deletePublicacion);
router.get('/:titulo/:vigente', publicacionCtrl.getPublicacionByTituloAndVigente);

module.exports = router;