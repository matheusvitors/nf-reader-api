import { PrismaClient } from "../generated/prisma/client";

const database = new PrismaClient({
	accelerateUrl: '',
	log: ['info', 'warn', 'error'],
	errorFormat: 'pretty',

});

export { database }
