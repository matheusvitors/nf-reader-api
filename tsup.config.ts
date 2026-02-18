import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts"],
	format: ["esm"], // ou ['esm', 'cjs'] para ambos
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
});
