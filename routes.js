// Iniciando Route do Express
const express = require('express');
const multer = require('multer');
const route = express.Router();
const editar = require('./src/controllers/editar');

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro')
const config = require('./src/config/multer')
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.get('/alunos', cadastro.aluno);
route.post('/cadastreiAluno', multer(config).single('foto'), cadastro.alunoInsert);

route.get('/cadastrar', cadastro.sala);
route.post('/cadastrei', cadastro.salaInsert);

route.get('/editarAluno/:id', editar.alunos);
route.post('/editarAluno/:id', multer(config).single('foto'), editar.adicionar);

route.get('/editarSala/:id', editar.salas)
route.post('/editarSala/:id',editar.atualizarSala)
module.exports = route;


