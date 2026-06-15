const {DataTypes} = require('sequelize');
const  sequelize = require('../../config/database');

const Transaccion = sequelize.define('Transaccion', {
    IdiomaOrigen: {type: DataTypes.STRING, allowNull: false},
    IdiomaDestino: {type: DataTypes.STRING, allowNull: false},
    TextoOrigen: {type: DataTypes.INTEGER, allowNull: false},
    TextoDestino: {type: DataTypes.INTEGER, allowNull: false},
    emailCliente: {type: DataTypes.STRING, allowNull: false}
},
{
tableName: 'transacciones', // Nombre de la tabla en minúsculas y plural
timestamps: true, // Crea automáticamente los campos createdAt y updatedAt
}
)
module.exports = Transaccion;