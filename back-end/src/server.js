const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 
app.use(routes);

/**
 * TIPOS DE PARÂMETROS
 * 
 * Query Params
 * Route Params
 * Request Body
 */


app.listen(3333);