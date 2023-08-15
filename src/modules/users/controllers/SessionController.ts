import { Request, Response } from 'express'
import { usersRepository } from '../repositories/UsersRepository'
import AppError from "../../../shared/erros/AppErrors"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '../../../config/auth';
import { Users } from '../entities/Users'

interface IRequest {
    email: string;
    password: string;
  }

  interface IResponse {
    user: Users;
    token: string;
  }

export  default class SessionController {
	public async create(req: Request, res: Response) {
        const { email,password } = req.body;

        try {
            const users = await usersRepository.findOneBy({ email: String(email) })

            if (!users) {
                throw new AppError('Incorrect email/password combination.', 401);
              }
            // console.log(users,authConfig.jwt.secret);

            const passwordConfirmed = await compare(password, users.password);

            if (!passwordConfirmed) {
                throw new AppError('Incorrect email/password combination.', 401);
            }


            const token = sign({ id: users.id }, authConfig.jwt.secret, {
                expiresIn: authConfig.jwt.expiresIn,
              });

              console.log(token)


              return res.json( {users,
                token })

		} catch (error) {
			console.log(error)

			return res.status(500).json( error )
		}


    }



}


