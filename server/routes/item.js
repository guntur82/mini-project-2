const itemRoutes = require('express').Router();
const { ItemController } = require('../controllers');

itemRoutes.get('/', ItemController.getData);
itemRoutes.post('/create', ItemController.craete);
itemRoutes.post('/update/:id', ItemController.update);
itemRoutes.get('/delete/:id', ItemController.delete);

module.exports = itemRoutes;
