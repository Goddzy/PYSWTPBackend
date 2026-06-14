const Empleado = require('../models/empleado.model');

const empleadoCtrl = {};

empleadoCtrl.getEmpleados = async (req, res) => {
    try{
        const empleados = await Empleado.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });
        res.json(empleados);
    }catch(error){
        res.status(500).json({message: 'Error al obtener los empleados', error: error.message});
    }
}

empleadoCtrl.createEmpleado = async (req, res) => {
    try{
        await Empleado.create(req.body);
        res.json({status: '1', message: 'Empleado creado correctamente'});
    }catch(error){
        res.status(500).json({message: 'Error al crear el empleado', error: error.message});
    }
};

empleadoCtrl.getEmpleado = async (req, res) => {
    try{
        const empleados = await Empleado.findByPk(req.params.id,
            {attributes: {exclude: ['createdAt', 'updatedAt']}}
        );
        if(empleados){
            res.json(empleados);
        }else{
            res.status(404).json({message: 'Empleado no encontrado'});
        }
    }catch(error){
        res.status(500).json({message: 'Error al obtener el empleado', error: error.message});
    }
};

module.exports = empleadoCtrl;