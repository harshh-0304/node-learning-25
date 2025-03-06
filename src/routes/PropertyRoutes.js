const routes = require('express').Router();
const propertyController = require('../controllers/PropertyController');

routes.post('/addproperty', propertyController.addProperty);
routes.get('/getallproperties', propertyController.getProperties);
module.exports = routes;