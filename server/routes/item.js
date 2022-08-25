const itemRoutes = require('express').Router();
const { ItemController } = require('../controllers');

itemRoutes.get('/', ItemController.getData);
itemRoutes.post('/create', ItemController.craete);
itemRoutes.put('/update/:id', ItemController.update); //post diganti put
itemRoutes.delete('/delete/:id', ItemController.delete); //get di ganti delete
itemRoutes.get('/information/:id', ItemController.getInformation);

module.exports = itemRoutes;
