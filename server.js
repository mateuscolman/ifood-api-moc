const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o app
const app = express();

//Permitir que o app envie dados no formato JSON
app.use(express.json());

//Torna a API pública
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/ifood-moc', { useNewUrlParser: true, useUnifiedTopology: true});

//Forçado o require de todas as rotas
requireDir('./src/models');

//Importando rotas
app.use('/', require('./src/routes'));

//Passando porta de comunicação
app.listen(3002);