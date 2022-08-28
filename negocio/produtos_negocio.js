const produtoRepositorio = require('../persistencia/cadastrar_produtos.js');


/*------------------+
| CADASTRAR PRODUTO |
+------------------*/
function inserir (produto, callback) {
    if(!produto || !produto.nome || !produto.preco){
        const erro = { 
            mensagem: "Todos os campos devem ser preenchidos corretamente!",
            numero: 400
        };
        callback(erro, undefined)
    }
    else {
        produtoRepositorio.inserirProduto(produto, callback);
    }  
}


/*-----------------+
| LISTAR  PRODUTOS |
+-----------------*/
function listar (callback) {
    produtoRepositorio.listar(callback);
}


/*-----------------+
| BUSCAR  PRODUTOS |
|    POR     ID    |
------------------*/
function buscarPorId(id, callback){
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else { 
        produtoRepositorio.buscarPorId(id, callback);
    }
}


/*-------------------+
|   ATUALIZAR   UM   |
| PRODUTO CADASTRADO |
+-------------------*/
function atualizar(id, produtoAlterado, callback) {
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else if(!produtoAlterado.nome || !produtoAlterado.preco) {
        const erro = { 
            mensagem: "Todos os campos devem ser preenchidos corretamente!",
            numero: 400
        };
        callback(erro, undefined)
    }
    else { 
        produtoRepositorio.atualizar(id, produtoAlterado, callback);
    }

}


/*----------------+
| DELETAR PRODUTO |  
|     POR    ID   |
+----------------*/
function deletar(id, callback) {
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else {
        produtoRepositorio.deletar(id,callback);
    }
}



module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar
}

