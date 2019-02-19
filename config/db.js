// Esse código do knex é pra automatizar a migration qnd rodar. Porém, não é recomendado
// pois banco de dados é algo delicado pra sair automatizando.
// Em vez do código abaixo, use o comando: knex migrate:latest
const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) //Cuidado! Migration automática é perigoso
module.exports = knex