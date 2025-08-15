import { describe, expect, it } from "vitest";
import supertest from "supertest";
import { app } from "@/server";
import { notaFiscal1, notaFiscal2 } from "__tests__/setup";

describe('Notas Fiscais Lidas/Não Lidas - Integration Test', () => {

	it('should check a nota fiscal', async () => {
		const response = await supertest(app)
		.get(`/nf/${notaFiscal2.id}/check`);

		const { body } = await supertest(app)
		.get(`/nf/${notaFiscal2.id}`);

		expect(response.status).toEqual(200);
		expect(body.response.content.check).toEqual(true);

	});

	it('should uncheck a nota fiscal', async () => {
		const response = await supertest(app)
		.get(`/nf/${notaFiscal1.id}/check`);

		const { body } = await supertest(app)
		.get(`/nf/${notaFiscal1.id}`);


		expect(response.status).toEqual(200);
		expect(body.response.content.check).toEqual(false);
	});
});
