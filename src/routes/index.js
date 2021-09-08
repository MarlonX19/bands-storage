const express = require('express');

const { bandsController, artistController } = require('../controllers')

const routes = express.Router();

routes.get('/home', bandsController.Show)
routes.post('/home', bandsController.Store)
routes.delete('/home', bandsController.Delete)

routes.post('/artists', artistController.Store)
routes.get('/artists', artistController.Get)
routes.get('/artists/:id', artistController.GetById)
routes.delete('/artists/:id', artistController.Delete)

module.exports = routes;