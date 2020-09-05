
const express = require('express');

const routes =express.Router();

const controller = require('../controllers/admincontroller');

routes.use('/adding',controller.adding);

module.exports = routes