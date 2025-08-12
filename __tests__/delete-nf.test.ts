import { describe, expect, it } from "vitest";
import supertest from "supertest";
import { app } from "@/server";
import { notaFiscal1 } from "__tests__/setup";

describe('Delete Nota Fiscal - Integration Test', () => {
	it('should delete the nota fiscal', async () => {
		const response = await supertest(app)
		.delete(`/nf/${notaFiscal1.id}`)

		expect(response.status).toEqual(200);
	});

	it('should not find the nota fiscal', async () => {
		const response = await supertest(app)
		.delete(`/nf/xyz`)

		expect(response.status).toEqual(404)
	});
});
