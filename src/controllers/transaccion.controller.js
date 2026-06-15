const Transaccion = require('../models/transaccion.model');

const transaccionCtrl = {};

transaccionCtrl.getTransacciones = async (req, res) => {
    try{

        const transacciones = await Transaccion.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las transacciones' });
    }
};

transaccionCtrl.createTransaccion = async (req, res) => {
    try{
        await Transaccion.create(req.body);
        res.json({ status: '1', msg: 'Transacción guardada.' });
    }catch(error){
        res.status(500).json({ message: 'Error al crear la transacción', error: error.message });
    }
};

transaccionCtrl.getTransaccionByClientEmail = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll({
            where: { emailCliente: req.params.email },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las transacciones' });
    }
};

transaccionCtrl.getTransaccionIdiomaOrigenAndDestino = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll({
            where: {
                IdiomaOrigen: req.params.idiomaOrigen,
                IdiomaDestino: req.params.idiomaDestino
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        res.json(transacciones);
    }catch (error) {
       res.status(500).json({ message: 'Error al obtener las transacciones' });
    }
};
module.exports = transaccionCtrl;