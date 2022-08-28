const express = require('express');
const rota = express.Router();

const produtoController = require('../controller/produtos_controller.js');


/*------------------+
| CADASTRAR PRODUTO |
+------------------*/
rota.post('/', produtoController.inserir);

/*-----------------+
| LISTAR  PRODUTOS |
+-----------------*/
rota.get('/', produtoController.listar);

/*-----------------+
| BUSCAR  PRODUTOS |
|    POR     ID    |
------------------*/
rota.get('/:id', produtoController.buscarPorId);

/*-------------------+
|   ATUALIZAR   UM   |
| PRODUTO CADASTRADO |
+-------------------*/
rota.put('/:id', produtoController.atualizar);

/*----------------+
| DELETAR PRODUTO |  
|     POR    ID   |
+----------------*/
rota.delete('/:id', produtoController.deletar);

module.exports = rota;