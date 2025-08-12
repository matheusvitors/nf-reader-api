import { repository } from '@/repository';
import { Request, Response} from 'express'

export const getNfController = async (request: Request, response: Response) => {
	let status = 200;
	let body: any = null;
	try {
		const notaFiscal = await repository.get(request.params.id);

		if(!notaFiscal) {
			status = 404;
		}

		body = { response: { content: notaFiscal }};
	} catch (error) {
		console.error(error);
		status = 500;
		body = {message: 'Erro inesperado do servidor.'}
	} finally {
		response.status(status).json(body || undefined)
	}
}
