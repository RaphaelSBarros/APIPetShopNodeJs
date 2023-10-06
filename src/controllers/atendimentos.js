const ServiceAtendimento = require("../services/atendimentos");

const servico = new ServiceAtendimento();

class ControllerAtendimento{

    async PegarUm(req, res){
        try{
            const result = await servico.PegarUm(req.params.id);

            res.status(200).json({
                atendimento: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao encontrar atendimento" })
        }
    }

    async PegarTodos(req, res){
        try{
            const result = await servico.PegarTodos();

            res.status(200).json({
                atendimentos: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao listar atendimentos" })
        }
    }

    async Add(req, res){
        try{
            servico.Add(req.body.horario, req.body.valor, req.body.idCachorro, req.body.status);

            res.status(201).json({
                message: "Adicionado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao adicionar atendimento" })
        }
    }

    async Update(req, res){
        try{
            servico.Update(req.params.id, req.body.status);

            res.status(200).json({
                message: "Atendimento alterado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }

    async Delete(req, res){
        try{
            servico.Delete(req.params.id);
        
            res.status(200).json({
                message: "Atendimento deletado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}

module.exports = ControllerAtendimento;