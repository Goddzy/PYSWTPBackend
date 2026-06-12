const Socio = require('../models/socio.model');

const socioCtrl = {};

socioCtrl.getSocios = async (req, res) => {

    try{

        const socios = await Socio.findAll({

            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        res.json(socios);

    }catch(error){
        res.status(500).json({message: 'Error al obtener los socios', error: error.message});
    }
}

socioCtrl.createSocio = async (req, res) => {
    try{

        await Socio.create(req.body);
        res.json({ status: '1', msg: 'Socio guardado.' });

    }catch(error){
        res.status(500).json({message: 'Error al crear el socio', error: error.message});
    }
}

module.exports = socioCtrl;