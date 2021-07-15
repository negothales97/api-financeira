const express = require('express');

const CustomerController = require('./controllers/CustomerController');

const routes = express.Router();

routes.get('/customer', CustomerController.index);
routes.get('/customer/:id', CustomerController.show);
routes.post('/customer/:id', CustomerController.create);
routes.put('/customer/:id', CustomerController.edit);
routes.delete('/customer/:id', CustomerController.delete);

module.exports = routes;