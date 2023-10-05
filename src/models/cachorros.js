const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Cachorro = sequelize.define('cachorros', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dono: {
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

module.exports = Cachorro;