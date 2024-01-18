import { Request, Response } from 'express'
import { findUserEmailQuery,createUserQuery } from '@shared/querys';
import {repositoryUsers} from '../repositories/UsersRepository'
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
      
      const result = await findUserEmailQuery(repositoryUsers,email)
          

      if(result.rowCount != 0){
        //throw new AppEerror('There  is already  one users  with this email')
        return res.status(200).json( {status:200,menssage:'There  is already  one users  with this email'} );
      }
          
      const hashedPassword = await hash(password,8);
      var filds = ['name','email','password','status'];

      function changeFildsForString(...filds:any){
        return filds.toString();
      }

      function changeValuesForString(...filds:any){
        var changeAllArrayForString = '';
        for (let index = 0; index < filds.length; index++) {
          const element = filds[index];
          changeAllArrayForString += `'${element}',`;          
        }
        return changeAllArrayForString
      }

          
      const users = await createUserQuery(repositoryUsers,changeFildsForString(filds),changeValuesForString(name, email,hashedPassword,1));
      if(users){
        console.log('deu tudo cert',users)
        return res.status(200).json( {status:200,menssage:'user created successfully',user:{name, email,status:1}} );
      }
      return res.status(500).json( {status:500,menssage:'servidor error'} );
    } catch (error) {
    // console.log(error)

    return res.status(500).json( error )
    }
  }

}
