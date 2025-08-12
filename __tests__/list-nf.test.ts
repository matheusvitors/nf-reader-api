import { describe, expect, it } from "vitest";
import supertest from "supertest";
import { app } from "@/server";

describe('List Notas Fiscais - Integration Test', () => {

	it('should list notas fiscais', async () => {
		const response = await supertest(app)
		.get('/nf');

		expect(response.status).toEqual(200);
		expect(response.body.response.content.length).above(1);
	});
});
