const express = require('express');
const routes = express.Router();

const StoreController = require('../src/controllers/StoreController');
const RequestController = require('./controllers/RequestController');

//Pedidos!!
routes.get('/v2version/polling', RequestController.polling);
routes.post('/requests', RequestController.placeOrder);
routes.get('/v2.0/orders/:correlationId', RequestController.order);

//Lojas!!
routes.post('/createstore', StoreController.createStore);
routes.get('/genToken', StoreController.authentication);
module.exports = routes;