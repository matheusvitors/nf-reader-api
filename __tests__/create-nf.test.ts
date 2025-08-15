import { describe, expect, it } from "vitest";
import supertest from "supertest";
import { app } from "@/server";

describe('Create Nota Fiscal - Integration Test', () => {
	it('should create a nota fiscal', async () => {
		const response = await supertest(app)
		.post(`/nf`)
		.send({
			link: 'http://teste.com/3',
			data: new Date()
		})

		expect(response.status).toEqual(201);
	});

	it('should return 422 if invalid date', async () => {
		const response = await supertest(app)
		.post(`/nf`)
		.send({
			link: 'http://teste.com/3',
			data: null
		})

		expect(response.status).toEqual(422);
		expect(response.body.message).toEqual('Data inválida!');
	});

	it('should return 422 if not send link', async () => {
		const response = await supertest(app)
		.post(`/nf`)
		.send({
			data: new Date()
		})

		expect(response.status).toEqual(422);
		expect(response.body.message).toEqual('Link é obrigatório!');
	});

})
