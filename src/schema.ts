import { boolean, date, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const notaFiscalTable = mysqlTable('notafiscal', {
	id: varchar({length: 255}).primaryKey().notNull(),
	description: varchar({length: 999}).notNull().default(''),
	link: varchar({length: 999}).notNull(),
	data: date().notNull(),
	check: boolean().default(false).notNull()
});

