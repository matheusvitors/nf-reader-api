import { database } from "@/database";
import { NotaFiscal } from "@/NotaFiscal";
import { Prisma } from "../generated/prisma/client";

interface FilterParams<T> {
	field: keyof T;
	value: any | { lte: Date; gte: Date };
}


export const repository = {
	list: async (): Promise<NotaFiscal[]> => {
		try {
			return await database.notafiscal.findMany();
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	get: async (id: string): Promise<NotaFiscal | null> => {
		try {
			const data = await database.notafiscal.findUnique({
				where: {id},
			})

			if(!data) {
				return null;
			}

			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	find: async (field: keyof NotaFiscal, value: any): Promise<NotaFiscal | null> => {
		const data = await database.notafiscal.findFirst({ where: {[field]: value}});

		if(!data) {
			return null;
		}

		return data;
	},

	filter: async (params: FilterParams<NotaFiscal>[]): Promise<NotaFiscal[] | null> => {
		const where: Prisma.NotafiscalWhereInput  = params.reduce(
			(obj, item) => Object.assign(obj, { [item.field]: item.value }), {});

		try {
			const data = await database.notafiscal.findMany({
				where,
				orderBy: [
					{ data: 'desc'},
				]
			});

			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},


	create: async (input: NotaFiscal): Promise<void> => {
		try {

			await database.notafiscal.create({
				data: input
			});

		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	edit: async (input: NotaFiscal): Promise<NotaFiscal | null> => {
		try {
			const result = await database.notafiscal.update({
				data: input,
				where: {
					id: input.id
				}
			});
			return result;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	remove: async (id: string): Promise<void> => {
		try {
			await database.notafiscal.delete({where: {id}})
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	removeAll: async () => {
		try {
			await database.notafiscal.deleteMany({})
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
