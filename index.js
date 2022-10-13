//Importar dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dbConne= require('./database');
require('dotenv').config()

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

dbConne()

//Rutas
app.use(require('./src/routes/tareas.routes'));
app.use(require('./src/routes/user.routes'));


//PUERTO
const port = 3000;
app.listen(port, ()=>{console.log(`Servidor corriendo en el puerto ${port}`)})