const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('Controle_Estudantes', 'adm_senhapc', 'etsds10243110',
{
dialect: 'mssql', host:'localhost', port: 1433
});
database.sync();
module.exports = database;