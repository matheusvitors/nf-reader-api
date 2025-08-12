import { NotaFiscal } from '@/NotaFiscal';
import { repository } from '@/repository';
import { Request, Response} from 'express'

export const editNfController = async (request: Request, response: Response) => {
	let status = 200;
	let body: any = null;

	try {

		const notaFiscal = await repository.get(request.params.id);

		if(!notaFiscal) {
			status = 404;
		} else {
			if(new Date(request.body.data).getTime() === 0) {
				status = 422;
				body = { message: 'Data inválida!'}
			}

			if(!request.body.link || request.body.link.length === 0) {
				status = 422;
				body = { message: 'Link é obrigatório!'}
			}

			if(status === 200){
				const notaFiscal: NotaFiscal = {
					id: request.params.id,
					link: request.body.link,
					data: new Date(request.body.link)
				}
				await repository.edit(notaFiscal);
			}
		}

	} catch (error) {
		response.status(500).json({message: 'Erro inesperado do servidor.'})
	} finally {
		response.status(status).json(body || undefined)
	}
}
