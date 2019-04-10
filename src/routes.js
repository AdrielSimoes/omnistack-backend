const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

/*
GET = busca informação
POST = criar algo
PUT = editar
DELETE = deletar
*/ 

//req = representa a requisição feita para o servidor(dados que o cliente envia)
//res = representa a resposta para o cliente
/*routes.get('/teste', (req, res) => {
    return res.send('Hello Rocket');
} )
 */

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FileController.store);
 
module.exports = routes;

