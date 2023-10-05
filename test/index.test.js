const { describe, expect, it } = require("@jest/globals");
const ServiceCliente = require("../src/services/clientes");
const conexao = require("../src/database")

describe("Testando a funcionalidade do banco", () => {
    const service = new ServiceCliente();
    let save;
    beforeAll(async () => {
        this.save = await conexao.transaction()
    });

    afterAll(() => {
        this.save.rollback();
    });

    it("Should add a client", () => {
        const qtde = service.PegarTodos().length;
        service.Add("Carlos", "(00)93333-3333");
        const qtdeAfter = service.PegarTodos().length;

        expect(qtdeAfter).toBe(qtde+1);
    });
});