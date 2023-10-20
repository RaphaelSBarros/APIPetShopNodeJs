const Cliente = require("../models/clientes");
const Cachorro = require("../models/cachorros")

class RepositoryCliente{

    async PegarUm(id, transaction){
        return Cliente.findOne({
            where:{ id },
            transaction,
            include: [ Cachorro ]
        });
    }

    async PegarUmPorEmail(email){
        return Cliente.findOne({
            where: { email }
        });
    }

    async PegarTodos(){
        return Cliente.findAll();
    }

    async PegarCachorros(dono){
        return Cachorro.findAll({
            where: { dono: dono }
        });
    }

    async Add(nome, telefone){
        return Cliente.create({
            nome,
            telefone
        });
    }

    async Update(id, nome, telefone){
        return Cliente.update({
            nome,
            telefone
        },{
            where: { id }
        });
    }

    async Delete(id){
        return Cliente.destroy({
            where: { id }
        });
    }

}

module.exports = RepositoryCliente;