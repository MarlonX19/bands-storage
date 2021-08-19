const express = require('express');

const { bandsController } = require('../controllers')

const routes = express.Router();

routes.get('/home', bandsController.Show)
routes.post('/home', bandsController.Store)
routes.delete('/home', bandsController.Delete)

module.exports = routes;