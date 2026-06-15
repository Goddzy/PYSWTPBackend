const Publicacion = require('../models/publicacion.model');
const Empleado = require('../models/empleado.model');

const publicacionCtrl = {};

publicacionCtrl.getPublicaciones = async (req, res) => {
    try{
        const publicaciones = await Publicacion.findAll({
            attributes: {exclude: ['empleadoId','createdAt', 'updatedAt']},
            include: [{
                model: Empleado,
                as: 'empleado',
                attributes: {exclude: ['createdAt', 'updatedAt']}   
            }]
        });
        res.json(publicaciones);
    }catch(error){
        res.status(500).json({message: 'Error al obtener las publicaciones', error: error.message});
    }
};

publicacionCtrl.createPublicacion = async (req, res) => {
    try{
        const data = req.body;
        if(data.empleado && data.empleado.empleadoId){
            data.empleadoId = data.empleado.empleadoId;
        }
        await Publicacion.create(data);
        res.json({status: '1', message: 'Publicación creada correctamente'});
    }catch(error){
        res.status(500).json({message: 'Error al crear la publicación', error: error.message});
    }
};

publicacionCtrl.deletePublicacion = async (req, res) => {
    try{
        const publicacion = await Publicacion.findByPk(req.params.id);
        if(publicacion){
            await Publicacion.destroy({where: {id: req.params.id}});
            res.json({status: '1', message: 'Publicación eliminada correctamente'});    
        }
        else{
            res.status(404).json({message: 'Publicación no encontrada'});
        }
    }catch(error){
        res.status(500).json({message: 'Error al eliminar la publicación', error: error.message});
    }
};

publicacionCtrl.updatePublicacion = async (req, res) => {
    try{
        const publicacion = await Publicacion.findByPk(req.params.id);
        if(publicacion){
            if(req.body.empleado && req.body.empleado.empleadoId){
                req.body.empleadoId = req.body.empleado.empleadoId;
            }
            await Publicacion.update(req.body, {where: {id: req.params.id}});
            res.json({status: '1', message: 'Publicación actualizada correctamente'});
        }else{
            return res.status(404).json({message: 'Publicación no encontrada'});
        }
    }catch(error){
        res.status(500).json({message: 'Error al actualizar la publicación', error: error.message});
    }
};

publicacionCtrl.getPublicacionByTituloAndVigente = async (req, res) => {
    try{
        const publicaciones = await Publicacion.findAll({
            where: {
                titulo: req.params.titulo,
                vigente: req.params.vigente
            }
        });
        res.json(publicaciones);
    }catch(error){
        res.status(500).json({message: 'Error al obtener la publicación', error: error.message});
    }
};

module.exports = publicacionCtrl;