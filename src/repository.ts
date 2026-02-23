import { database } from "@/database";
import { NotaFiscal } from "@/NotaFiscal";
import { format } from "date-fns";
import { NotaFiscalDTO } from "@/NotaFiscalDTO";
import { and, eq, SQL } from "drizzle-orm";
import { notaFiscalTable } from "@/schema";

interface FilterParams<T> {
	field: keyof T;
	value: any | { lte: Date; gte: Date };
}

export const repository = {
	list: async (): Promise<NotaFiscalDTO[]> => {
		try {

			const data = await database.select().from(notaFiscalTable);

			const notasFiscais: NotaFiscalDTO[] = data.map(nf => {return {
				id: nf.id,
				description: nf.description,
				link: nf.link,
				data: format(new Date(nf.data), 'yyyy-MM-dd'),
				check: nf.check,
			}})
			return notasFiscais;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	get: async (id: string): Promise<NotaFiscalDTO | null> => {
		try {
			const [data] = await database.select().from(notaFiscalTable).where(eq(notaFiscalTable.id, id));

			if(!data) {
				return null;
			}

			return {
				id: data.id,
				description: data.description,
				link: data.link,
				data: format(data.data, 'yyyy-MM-dd'),
				check: data.check,
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	find: async (field: keyof NotaFiscal, value: any): Promise<NotaFiscal | null> => {
			const [data] = await database.select().from(notaFiscalTable).where(eq(notaFiscalTable[field], value));

		if(!data) {
			return null;
		}

		return {
			id: data.id,
			description: data.description,
			link: data.link,
			data: format(data.data, 'yyyy-MM-dd'),
			check: data.check,
		};
	},

	filter: async (params: FilterParams<NotaFiscal>[]): Promise<NotaFiscal[] | null> => {

		const filters: SQL[] = [];

		params.forEach(({ field, value}) => {
			filters.push(eq(notaFiscalTable[field], value))
		})

		try {
			const data = await database.select().from(notaFiscalTable).where(and(...filters));

			const notasFiscais: NotaFiscalDTO[] = data.map(nf => {return {
				id: nf.id,
				description: nf.description,
				link: nf.link,
				data: format(new Date(nf.data), 'yyyy-MM-dd'),
				check: nf.check,
			}})

			return notasFiscais;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	create: async (input: NotaFiscal): Promise<void> => {
		try {
			await database.insert(notaFiscalTable).values({
				id: input.id,
				description: input.description,
				link: input.link,
				data: new Date(input.data),
				check: input.check,
			});

		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	edit: async (input: NotaFiscal): Promise<void> => {
		try {
			await database.update(notaFiscalTable).set({
				description: input.description,
				link: input.link,
				data: new Date(input.data),
				check: input.check,
			})
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	remove: async (id: string): Promise<void> => {
		try {
			await database.delete(notaFiscalTable).where(eq(notaFiscalTable.id, id));
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	removeAll: async () => {
		try {
			await database.delete(notaFiscalTable);
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
