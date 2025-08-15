import { Router, Request, Response } from "express";
import project from '../package.json';
import { createNfController, deleteNfController, editNfController, getNfController, listNfController } from "@/controllers";
import { checkNfController } from "@/controllers/check-nf-controller";

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
	response.status(200).send({
		name: project.systemName,
		teste: 1,
		version: project.version
	});
});

routes.get('/nf', async (request: Request, response: Response) => {
	await listNfController(request, response);
});

routes.get('/nf/:id', async (request: Request, response: Response) => {
	await getNfController(request, response);
});

routes.get('/nf/:id/check', async (request: Request, response: Response) => {
	await checkNfController(request, response);
});

routes.post('/nf', async (request: Request, response: Response) => {
	await createNfController(request, response);
});

routes.put('/nf/:id', async (request: Request, response: Response) => {
	await editNfController(request, response);
});

routes.delete('/nf/:id', async (request: Request, response: Response) => {
	await deleteNfController(request, response);
});

export { routes }
