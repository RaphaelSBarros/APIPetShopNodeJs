const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Usuario = sequelize.define('usuarios', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissao: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Usuario;