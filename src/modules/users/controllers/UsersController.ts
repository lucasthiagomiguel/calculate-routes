import { Request, Response } from 'express'
import { usersRepository } from '../repositories/UsersRepository'
import AppEerror from "../../../shared/erros/AppErrors"
import { hash } from 'bcryptjs';
interface IRequest {
    name:string,
    email:string,
    password:string,
    status:boolean
  }

export  default class UsersController {
	public async create(req: Request, res: Response): Promise<Response> {
        const { name, email,password }:IRequest  = req.body;

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
                status:1
            })
            await usersRepository.save(users)


            return res.json(users);
		} catch (error) {
			console.log(error)

			return res.status(500).json( error )
		}


      }

}
