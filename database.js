const { Sequelize } = require('sequelize');
const { development } = require('./config');

const sequelize = new Sequelize(development);

sequelize.sync()
    .then(() => {
        console.log('conectado ao banco com sucesso')
    })
    .catch((error) => {
        console.error('não conectou ao banco de dados', error)
    })

module.exports = sequelize;