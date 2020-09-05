const express = require('express');

const routes = express.Router();

const controller = require('../controllers/usercontroller');

routes.use('/add',controller.add);

routes.use('/products',controller.products);

routes.use('/home',controller.home);

module.exports = routes;