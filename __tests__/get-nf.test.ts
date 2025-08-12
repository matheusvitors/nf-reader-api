import { describe, expect, it } from "vitest";
import supertest from "supertest";
import { app } from "@/server";
import { notaFiscal1 } from "__tests__/setup";

describe('Get Nota Fiscal - Integration Test', () => {
	it('should get the nota fiscal', async () => {
		const response = await supertest(app)
		.get(`/nf/${notaFiscal1.id}`)

		expect(response.status).toEqual(200);
	});

	it('should not find the nota fiscal', async () => {
		const response = await supertest(app)
		.get(`/nf/xyz`)

		expect(response.status).toEqual(404)
	});
});
