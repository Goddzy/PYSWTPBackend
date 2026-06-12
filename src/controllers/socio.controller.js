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

socioCtrl.updateSocio = async (req, res) => {
    try{
  
        await Socio.update(req.body, {
            where: { id: req.params.id }
        })

        res.json({ status: '1', msg: 'Socio actualizado.' });

    }catch(error){
        res.status(500).json({message: 'Error al actualizar el socio', error: error.message});
    }
}

socioCtrl.deleteSocio = async (req, res) => {
    
    try{
    
        await Socio.destroy({
            where: { id: req.params.id }
        })

        res.json({ status: '1', msg: 'Socio eliminado.' });

    }catch(error){
        res.status(500).json({message: 'Error al eliminar el socio', error: error.message});
    }
}

socioCtrl.getSociosActivos = async (req, res) => {

    try{

        const socios = await Socio.findAll({
            where: { activo: true },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        
        res.json(socios);

    }catch(error){
        res.status(500).json({message: 'Error al obtener los socios activos', error: error.message});
    }
}



module.exports = socioCtrl;