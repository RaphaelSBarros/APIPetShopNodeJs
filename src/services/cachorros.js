const RepositoryCachorro = require("../repositories/cachorros");

const repositorio = new RepositoryCachorro();

class ServiceCachorro{

    async PegarUm(id){
        return repositorio.PegarUm(id);
    }

    async PegarTodos(){
        return repositorio.PegarTodos();
    }

    async Add(nome, dono){
        if(nome == "" || isNaN(dono)){
            throw new Error("Favor preencher todos os dados");
        }
        repositorio.Add(nome, dono);
    }

    async Update(id, nome){
        if(nome == ""){
            throw new Error("Favor preencher todos os dados");
        }else if(id < 0 || isNaN(id)){
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.Update(id, nome);
    }
    async Delete(id){
        if(id < 0 || isNaN(id)){
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.Delete(id);
    }
}

module.exports = ServiceCachorro;