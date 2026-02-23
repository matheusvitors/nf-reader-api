import { describe, expect, it } from "vitest";
import supertest from "supertest";
import { app } from "@/server";
import { notaFiscal2 } from "./setup";

describe('Edit Nota Fiscal - Integration Test', () => {
	it('should edit a nota fiscal', async () => {
		const response = await supertest(app)
		.put(`/nf/${notaFiscal2.id}`)
		.send({
			link: 'http://teste.com/3',
			data: new Date()
		})

		expect(response.status).toEqual(200);
	});

	it('should return 422 if invalid date', async () => {
		const response = await supertest(app)
		.put(`/nf/${notaFiscal2.id}`)
		.send({
			link: 'http://teste.com/3',
			data: null
		})

		expect(response.status).toEqual(422);
		expect(response.body.message).toEqual('Data inválida!');
	});

	it('should return 422 if not send link', async () => {
		const response = await supertest(app)
		.put(`/nf/${notaFiscal2.id}`)
		.send({
			data: new Date()
		})

		expect(response.status).toEqual(422);
		expect(response.body.message).toEqual('Link é obrigatório!');
	});

	it('should return 404 if nota not found', async () => {
		const response = await supertest(app)
		.put(`/nf/xyz`)
		.send({
			link: 'http://teste.com/3',
			data: null
		})

		expect(response.status).toEqual(404);
	});

})
