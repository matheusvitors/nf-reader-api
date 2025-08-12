import { repository } from '@/repository';
import { Request, Response} from 'express'

export const deleteNfController = async (request: Request, response: Response) => {
	let status = 200;

	try {
		const id = request.params.id;
		const notaFiscal = await repository.get(id);

		if(!notaFiscal) {
			status = 404;
		} else {
			await repository.remove(id);
		}

	} catch (error) {
		console.error(error);
		response.status(500).json({message: 'Erro inesperado do servidor.'})
	} finally {
		response.status(status).end();
	}
}
