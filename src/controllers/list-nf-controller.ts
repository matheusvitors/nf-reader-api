import { repository } from '@/repository';
import { Request, Response} from 'express'

export const listNfController = async (request: Request, response: Response) => {
	try {
		const notasFiscais = await repository.list();
		response.status(200).json({ response: { content: notasFiscais }});
	} catch (error) {
		response.status(500).json({message: 'Erro inesperado do servidor.'})
	}
}
