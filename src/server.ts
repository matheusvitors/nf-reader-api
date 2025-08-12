import express, { RequestHandler } from "express";
import 'dotenv/config';
import { middlewares } from "@/middlewares";
import { routes } from "@/routes";
import project from '../package.json';
import { repository } from "@/repository";

const app = express();

app.use(middlewares as RequestHandler[]);
app.use(routes);

const PORT = process.env.PORT || 8000

if(process.env.NODE_ENV !== "test") {
	app.listen(PORT, function (){
		console.info(`${project.systemName} running on port ${PORT}`);
	});
} else {
	repository.removeAll();
}

export { app };
