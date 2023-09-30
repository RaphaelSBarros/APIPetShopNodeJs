const Cliente = require("../models/clientes");

class RepositoryCliente{
    async PegarUm(id){
        return Cliente.findOne({
            where:{ id }
        });
    }

    async PegarTodos(){
        return Cliente.findAll();
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