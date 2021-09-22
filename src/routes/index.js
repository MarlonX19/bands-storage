const express = require('express');
const multer = require('multer');
const { multerConfig } = require('../config');

const fileHandler = multer(multerConfig);

const { bandsController, artistController } = require('../controllers');

const routes = express.Router();

routes.get('/home', bandsController.Show);
routes.post('/home', fileHandler.single('bandsimage'), bandsController.Store);
routes.delete('/home', bandsController.Delete);

routes.post('/artists', artistController.Store);
routes.get('/artists', artistController.Get);

module.exports = routes;