import { NotaFiscal } from "@/NotaFiscal";
import { repository } from "@/repository";
import { uuidv7 } from "uuidv7";
import { beforeAll } from "vitest";

export const notaFiscal1: NotaFiscal = {
	id: uuidv7(),
	link: "http://teste.com/1",
	data: new Date()
}

export const notaFiscal2: NotaFiscal = {
	id: uuidv7(),
	link: "http://teste.com/2",
	data: new Date()
}

beforeAll(async () => {
	await repository.create(notaFiscal1)
	await repository.create(notaFiscal2)
});

