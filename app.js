const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const produtosRota = require('./rotas/produtos_rotas.js');

app.use('/api/produtos', produtosRota);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})


/*
prof.ries@gmail.com / lhries@senacrs.com.br
 */