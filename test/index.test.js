const { describe, expect, it, beforeAll, afterAll } = require("@jest/globals");
const ServiceCliente = require("../src/services/clientes");
const conexao = require("../src/database");

describe("Testando a funcionalidade do banco", () => {
    
    beforeAll(async () => {
        this.save = await conexao.transaction()
    });

    afterAll(() => {
        this.save.rollback();
    });

    it('Should get client', async () => {
        const result = await servico.PegarUm(5, this.save)
  
        expect(result.id).toBe(1);
        expect(result.nome).toBe('joao');
        expect(result.telefone).toBe('teste@teste.com');
     });
  
     it('Should create a client', async () => {
        const result = await servico.Add({
           nome: 'joao',
           telefone: '(00)92222-2222',
        }, this.save)
  
        expect(result.nome).toBe('joao');
        expect(result.telefone).toBe('(00)92222-2222');
     });
});