const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Cachorro = require("./cachorros");
const Usuario = require("./usuarios");

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

Cachorro.belongsTo(Cliente, { foreignKey: 'idCliente' });
Cliente.hasMany(Cachorro, { foreignKey: 'idCliente' });


module.exports = Cliente;