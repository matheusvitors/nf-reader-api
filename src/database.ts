import { PrismaClient } from "../generated/prisma/client";

const database = new PrismaClient({
	log: ['info', 'warn', 'error'],
	errorFormat: 'pretty'
});

export { database }
