const { describe, expect, it } = require("@jest/globals");
const ServiceCliente = require("../src/services/clientes");

describe("Testando a funcionalidade do banco", () => {
    const service = new ServiceCliente();

    beforeAll(async () => {
        console.info("Iniciando os Testes");
    });

    afterAll(() => {
        console.info("Encerrando os testes");
    });

    it("Should add a client", () => {
        const qtde = service.PegarTodos().length;
        service.Add("Carlos", "(00)93333-3333");
        const qtdeAfter = service.PegarTodos().length;

        expect(qtdeAfter).toBe(qtde+1);
    });
});