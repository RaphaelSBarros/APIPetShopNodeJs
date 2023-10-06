const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Atendimento = sequelize.define('atendimentos', {
    idAtendimentos: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    horario: {
        type: DataTypes.DATE,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    idCachorro: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cachorros',
            key: 'id'
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Atendimento;