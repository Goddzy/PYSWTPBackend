const {DataTypes} = require('sequelize');
const  sequelize = require('../config/database');

const Socio = sequelize.define('Socio', {
    nombre: {type: DataTypes.STRING, allowNull: false},
    apelido: {type: DataTypes.STRING, allowNull: false},
    foto: {type: DataTypes.STRING, allowNull: false},
    dni: {type: DataTypes.STRING, allowNull: false},
    numeroSocio: {type: DataTypes.STRING, allowNull: false},
    activo: {type: DataTypes.BOOLEAN, allowNull: false}
},
{
tableName: 'socios', // Nombre de la tabla en minúsculas y plural
timestamps: true, // Crea automáticamente los campos createdAt y updatedAt
}
)
module.exports = Socio;