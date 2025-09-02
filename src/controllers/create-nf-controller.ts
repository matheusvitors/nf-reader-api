import { NotaFiscal } from '@/NotaFiscal';
import { repository } from '@/repository';
import { Request, Response} from 'express'
import { uuidv7 } from 'uuidv7';

export const createNfController = async (request: Request, response: Response) => {
	let status = 201;
	let body: any = null;

	try {

		if(new Date(request.body.data).getTime() === 0) {
			status = 422;
			body = { message: 'Data inválida!'}
		}

		if(!request.body.link || request.body.link.length === 0) {
			status = 422;
			body = { message: 'Link é obrigatório!'}
		}

		if (status === 201) {
			const notaFiscal: NotaFiscal = {
				id: uuidv7(),
				description: request.body.description,
				link: request.body.link,
				data: request.body.data,
				check: false
			}

			await repository.create(notaFiscal);
		}
	} catch (error) {
		response.status(500).json({message: 'Erro inesperado do servidor.'})
	} finally {
		response.status(status).json(body || undefined)
	}
}
