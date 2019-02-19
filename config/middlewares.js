// Middlewares
const bodyParser = require('body-parser')
const cors = require('cors') // necessário para liberar as urls pro front poder acessar.

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin:'*'
    }))
}