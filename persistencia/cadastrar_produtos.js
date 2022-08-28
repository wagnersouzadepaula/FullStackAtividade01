let listaProdutos = [
    { 
      id: 1, 
      nome: "PS4",
      preco: 4000
    },
    {
      id: 2,
      nome: "XBOX",
      preco: 2500
    }
  ]

geradorId = 3

/*------------------+
| CADASTRAR PRODUTO |
+------------------*/
function inserirProduto(produto, callback) {
    let produtoAux = {
        "id": geradorId,
        "nome": produto.nome,
        "preco": produto.preco
    };
    listaProdutos.push(produtoAux);
    callback(undefined, produtoAux);
    geradorId += 1;
    console.log(`O produto abaixo foi cadastrado com sucesso`);
    console.log(produtoAux) 
}

/*-----------------+
| LISTAR  PRODUTOS |
+-----------------*/
function listar(callback) {
    console.log("Até o presente momento, temos os produtos abaixo cadastrados:");
    for (let produto in listaProdutos) {
        console.log(listaProdutos[produto])
    }
    callback(undefined, listaProdutos)
}

/*-----------------+
| BUSCAR  PRODUTOS |
|    POR     ID    |
------------------*/
function buscarPorId(id, callback){
    let encontrado = 0;
    for (let produto of listaProdutos){
        if (produto.id == id){
            console.log(`O produto de id ${id} foi encontrado:`);
            console.log(produto);
            encontrado = 1;
            callback(undefined, produto);
        }
    };
    if (encontrado == 0){
        const error = {"mensagem": "Produto nao encontrado"};
        console.log(error);
        callback(undefined, error);
    }
}


/*-------------------+
|   ATUALIZAR   UM   |
| PRODUTO CADASTRADO |
+-------------------*/
function atualizar(id,produtoAlterado, callback) {
    let encontrado = 0;
    for (let produto of listaProdutos){
        if (produto.id == id){
            console.log(`O produto de id ${id} foi Alterado:`);
            encontrado = 1;
            produto.nome = produtoAlterado.nome;
            produto.preco = produtoAlterado.preco;
            console.log(produto);
            callback(undefined, produto);
        }
    };
    if (encontrado == 0){
        const error = {"mensagem": "Produto nao encontrado"};
        console.log(error);
        callback(undefined, error);
    }
}


/*----------------+
| DELETAR PRODUTO |  
|     POR    ID   |
+----------------*/
function deletar(id, callback) {
    let encontrado = 0;
    let contador = 0;
    for (let produto of listaProdutos){
        if (produto.id == id){
            console.log(`O produto de id ${id} foi deletado:`);
            encontrado = 1;
            listaProdutos.splice(contador,1);
            console.log(produto);
            callback(undefined, produto);
        }
        contador += 1;
    };
    if (encontrado == 0){
        const error = {"mensagem": "Produto nao encontrado"};
        console.log(error);
        callback(undefined, error);
    }

}


module.exports = {
    inserirProduto, listar, buscarPorId, atualizar, deletar}