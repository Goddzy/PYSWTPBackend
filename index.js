const express = require('express');
const cors = require('cors')
const sequelize = require('./config/database');
var app = express();


app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas
//app.use('/api/agente', require('./src/routes/agente.route.js'));
//app.use('/api/sector', require('./src/routes/sector.route'));



app.set('port', process.env.PORT || 3000);


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas de PostgreSQL sincronizadas');

        app.listen(app.get('port'), () => {
            console.log(`Server started on port`, app.get('port'));
        });
    })
    .catch(err => {
        console.error('No se pudo iniciar el servidor debido a un error en la BD:', err);
    });
