const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
routes.post('/login',celebrate({
    [Segments.BODY]:Joi.object().keys({
        id: Joi.string().required()
    })
}),SessionController.create);
// List ONG's
routes.get('/ongs',OngsController.list);
// Create ONG's
routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),OngsController.create);

routes.post('/incidents/new',celebrate({
    [Segments.HEADERS]:Joi.object({authorization: Joi.string().required()}).unknown(),
    [Segments.BODY]:Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
}),IncidentController.create);

routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number(),
    }),
}),IncidentController.index);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required(),
    }),
}),IncidentController.delete);

routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({authorization: Joi.string().required()}).unknown(),
}),ProfileController.index);


module.exports = routes;