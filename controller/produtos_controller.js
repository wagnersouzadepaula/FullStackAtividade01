const produtoNegocio = require('../negocio/produtos_negocio.js');


/*------------------+
| CADASTRAR PRODUTO |
+------------------*/
exports.inserir = (req, res) => {
    const produto = req.body;
  
    produtoNegocio.inserir(produto, 
      function(err, produtoInserido) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.status(201).json(produtoInserido);
        }
      });  
}


/*-----------------+
| LISTAR  PRODUTOS |
+-----------------*/
exports.listar = (req, res) => {
  produtoNegocio.listar(function (err, produtos) {
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(produtos);
      }
    })
}

/*-----------------+
| BUSCAR  PRODUTOS |
|    POR     ID    |
------------------*/
exports.buscarPorId = (req, res) => {
    const id = req.params.id;

    produtoNegocio.buscarPorId(id, function (err, produto){
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(produto);
      }
    });
}

/*-------------------+
|   ATUALIZAR   UM   |
| PRODUTO CADASTRADO |
+-------------------*/
exports.atualizar = (req, res) => {
    const id = req.params.id;
    const produto = req.body;
    produtoNegocio.atualizar(id, produto, 
      function(err, produtoAlterado) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(produtoAlterado);
        }
      });
}

/*----------------+
| DELETAR PRODUTO |  
|     POR    ID   |
+----------------*/
exports.deletar = (req, res) => {
    const id = req.params.id;
    produtoNegocio.deletar(id, function (err, produto){
        if(err) {
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(produto);
        }
      });
  }