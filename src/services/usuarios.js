const RepositoryUsuario = require("../repositories/usuarios");

const repositorio = new RepositoryUsuario();

class ServiceUsuario{
    
    async PegarUm(id){
        return repositorio.PegarUm(id);
    }

    async PegarTodos(){
        return repositorio.PegarTodos();
    }

    async Add(usuario){
        repositorio.Add(usuario);
    }

    async Update(id, usuario){
        repositorio.Update(id, usuario);
    }

    async Delete(id){
        repositorio.Delete(id);
    }
}

module.exports = ServiceUsuario;