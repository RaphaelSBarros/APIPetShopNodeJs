const RepositoryCliente = require("../repositories/clientes");

const repositorio = new RepositoryCliente();

class ServiceCliente{

    async PegarUm(id){
        return repositorio.PegarUm(id);
    }

    async PegarTodos(){
        return repositorio.PegarTodos();
    }

    async PegarCachorros(dono){
        return repositorio.PegarCachorros(dono);
    }

    async Add(nome, telefone){
        if(nome == "" || telefone == ""){
            throw new Error("Favor preencher todos os dados");
        }
        repositorio.Add(nome, telefone);
    }

    async Update(id, nome, telefone){
        if(nome == "" || telefone == ""){
            throw new Error("Favor preencher todos os dados");
        }else if(id < 0 || isNaN(id)){
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.Update(id, nome, telefone);
    }
    
    async Delete(id){
        if(id < 0 || isNaN(id)){
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.Delete(id);
    }
}

module.exports = ServiceCliente;