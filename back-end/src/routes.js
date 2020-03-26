const express = require('express');
const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
routes.post('/login',SessionController.create);
// List ONG's
routes.get('/ongs',OngsController.list);
// Create ONG's
routes.post('/ongs',OngsController.create);

routes.post('/incidents/new',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.index);


module.exports = routes;