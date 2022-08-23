const brandRoutes = require('express').Router();
const { BrandController } = require('../controllers');

brandRoutes.get('/', BrandController.getData);
brandRoutes.post('/create', BrandController.craete);
brandRoutes.post('/update/:id', BrandController.update);
brandRoutes.get('/delete/:id', BrandController.delete);

module.exports = brandRoutes;
