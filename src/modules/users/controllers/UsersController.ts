import { Request, Response } from 'express'
import { usersRepository } from '../repositories/UsersRepository'
import AppEerror from "../../../shared/erros/AppErrors"
import { hash } from 'bcryptjs';

export  default class UsersController {
	public async create(req: Request, res: Response): Promise<Response> {
        const { name, email,password,status } = req.body;

        try {
            const usersExists = await usersRepository.findOneBy({ email: String(email) })

            if(usersExists){
                 throw new AppEerror('There  is already  one users  with this email')
            }

            const hashedPassword = await hash(password,8);
            const users = usersRepository.create({
                name,
                email,
                password:hashedPassword,
                status
            })
            await usersRepository.save(users)


            return res.json(users);
		} catch (error) {
			console.log(error)

			return res.status(500).json( error )
		}


      }


	async createVideo(req: Request, res: Response) {
		const { title, url } = req.body
		const { idRoom } = req.params

		try {
			const room = await usersRepository.findOneBy({ id: Number(idRoom) })

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
			const room = await usersRepository.findOneBy({ id: Number(idRoom) })

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
			const rooms = await usersRepository.find({
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
