import { Request, Response } from 'express'
import { repositoryUsers } from '../repositories/UsersRepository'
import { findUserEmailQuery } from '@shared/querys';
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '@config/auth';

interface IRequest {
    email: string;
    password: string;
  }


export  default class SessionController {
	public async create(req: Request, res: Response) {
    const { email,password } = req.body;

    try {
      const users = await findUserEmailQuery(repositoryUsers,email);

      if (users.rowCount == 0) {
        return res.status(400).json( {status:400,menssage:'Incorrect email/password combination.'} );
      }

      const passwordConfirmed = await compare(password, users.rows[0].password);

      if (!passwordConfirmed) {
        return res.status(400).json( {status:400,menssage:'Incorrect email/password combination.'} );
      }


      const token = sign({ id: users.rows[0].id }, authConfig.jwt.secret, {
        expiresIn: authConfig.jwt.expiresIn,
      });
      return res.json( {users:{
        id:users.rows[0].id,
        name:users.rows[0].name,
        email:users.rows[0].email,
        status:users.rows[0].status,
        created:users.rows[0].created,
        updated:users.rows[0].updated
      },
      token })

		} catch (error) {
			console.log(error)

			return res.status(500).json( error )
		}
  }
}