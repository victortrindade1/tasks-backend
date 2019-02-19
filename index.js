const express = require('express')
const app = express()
const db = require('./config/db') //arquivo de migração automática do knex
const consign = require('consign')

// consign:
// Serve para compartilhar informações entre módulos.
// Para usar o consign, use o "app" como parâmetro em todos os módulos.
// O consign permitirá que manipulemos app.user, app.db, etc...
consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api') //pelo fato de carregar minha api inteira no consign, me faz não precisar carregar task, nem user, nem nada...
    .then('./config/routes.js')
    .into(app)

app.db = db

app.get('/', (req, res) => {
    res.status(200).send('Meu backend!')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})