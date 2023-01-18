const sala = require('../model/sala');
const aluno = require('../model/aluno');
const { raw } = require('express');

module.exports = {
    async pagInicialGet(req, res) {
        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });
        res.render('../views/ControleEstudante', { salas, alunos: '', id: '', salaSelecionada:''});
    },
    async pagInicialPost(req, res) {
        const id = req.body.nome;
        console.log(req.body)
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto'],
            where: { IDSala: id }
        });
        const salas = await sala.findAll({ raw: true, attributes: ['IDSala', 'Nome'] });
        const salaSelecionada = await sala.findByPk(id, {raw: true, attributes: ['IDSala', 'Nome', 'Capacidade'] });
        res.render('../views/ControleEstudante', { salas, alunos, id, salaSelecionada});
    },
    async pagAluno(req, res) {
        res.render('../views/cadastroAluno')
    },
    async pagCadastro(req, res) {
        res.render('../views/cadastrarSala')
    }
}