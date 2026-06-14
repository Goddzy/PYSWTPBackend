const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proyectoBackend', 'postgres', 'postre123', {
host: 'localhost',
dialect: 'postgres',
logging: false, // Evita que llene la consola con logs de consultas SQL básicas
});
// Probar y levantar la conexión
sequelize.authenticate()
.then(() => console.log('DB is connected to PostgreSQL'))
.catch(err => console.error('Error al conectar a PostgreSQL:', err));
module.exports = sequelize;