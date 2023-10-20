const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Usuario = sequelize.define('usuarios', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
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

module.exports = Usuario;