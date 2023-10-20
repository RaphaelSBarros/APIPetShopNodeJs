const RepositoryAtendente = require("../repositories/atendentes");

const repositorio = new RepositoryAtendente();

class ServiceAtendente{
    
    async PegarUm(id){
        return repositorio.PegarUm(id);
    }

    async PegarTodos(){
        return repositorio.PegarTodos();
    }

    async Add(atendente){
        repositorio.Add(atendente);
    }

    async Update(id, atendente){
        repositorio.Update(id, atendente);
    }

    async Delete(id){
        repositorio.Delete(id);
    }
}

module.exports = ServiceAtendente;