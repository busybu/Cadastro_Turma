module.exports = {
    async pagInicialGet(req, res) {
        res.render('../views/controleEstudante');
    },
    async pagAluno (req, res) {
        res.render('../views/cadastroAluno')
    },
    async pagCadastro (req, res){
        res.render('../views/cadastrarSala')
    }
}