const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Cliente = sequelize.define('clientes', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
    }
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Cliente;