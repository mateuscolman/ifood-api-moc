const express = require('express');
const routes = express.Router();

const RequestConstroller = require('./controllers/RequestController');

routes.get('/v2version/polling', RequestConstroller.polling);
routes.post('/requests', RequestConstroller.placeOrder);
routes.get('/v2.0/orders/:correlationId', RequestConstroller.order);

module.exports = routes;