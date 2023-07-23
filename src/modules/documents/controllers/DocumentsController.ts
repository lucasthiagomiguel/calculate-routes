import { Request, Response } from 'express'
import { documentsRepository } from '../repositories/DocumentsRepository'
import AppEerror from "../../../shared/http/erros/AppErrors"

export  default class DocumentsController {
	public async create(req: Request, res: Response): Promise<Response> {
        const { name, document_content,id_users,status } = req.body;

        try {
            const documentExists = await documentsRepository.findOneBy({ name: String(name) })

            if(documentExists){
                 throw new AppEerror('There  is already  one document  with this name')
            }

            const document = documentsRepository.create({
                name,
                document_content,
                id_users,
                status
            })
            await documentsRepository.save(document)


            return res.json(document);
		} catch (error) {
			console.log(error)

			return res.status(500).json( error )
		}


      }


	async createVideo(req: Request, res: Response) {
		const { title, url } = req.body
		const { idRoom } = req.params

		try {
			const room = await documentsRepository.findOneBy({ id: Number(idRoom) })

			if (!room) {
				return res.status(404).json({ message: 'Aula não existe' })
			}





			return res.status(201).json()
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

	async roomSubject(req: Request, res: Response) {
		const { subject_id } = req.body
		const { idRoom } = req.params

		try {
			const room = await documentsRepository.findOneBy({ id: Number(idRoom) })

			if (!room) {
				return res.status(404).json({ message: 'Aula não existe' })
			}







			return res.status(204).send()
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

	async list(req: Request, res: Response) {
		try {
			const rooms = await documentsRepository.find({
				relations: {

				},
			})

			return res.json(rooms)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}
}
