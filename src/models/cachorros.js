const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Atendimento = require("./atendimentos");

const Cachorro = sequelize.define('cachorros', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idCliente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'clientes',
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
});

Atendimento.belongsTo(Cachorro, { foreignKey: 'idCachorro' })
Cachorro.hasMany(Atendimento, { foreignKey: 'idCachorro' });

module.exports = Cachorro;