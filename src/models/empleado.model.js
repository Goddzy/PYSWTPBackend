const {DataTypes} = require('sequelize');
const  sequelize = require('../../config/database');

const Empleado = sequelize.define('Empleado', {
    apellido: {type: DataTypes.STRING, allowNull: false},
    nombre: {type: DataTypes.STRING, allowNull: false},
    dni: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
},
{
    tableName: 'empleados', // Nombre de la tabla en minúsculas y plural
    timestamps: true, // Crea automáticamente los campos createdAt y updatedAt
}
)
module.exports = Empleado;