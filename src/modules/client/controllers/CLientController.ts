import { Request, Response } from 'express'
import AppEerror from "../../../shared/erros/AppErrors"
import { createAnQuery } from '@shared/querys';
import { updateClient } from  '@shared/functions'
import {repositoryClient} from '../repositories/ClientRepository'
interface IRequest {
    name:string,
    email:string,
    telefone:string,
    status:number,
    id_users:string
  }

export  default class ClientController {
	public async create(req: Request, res: Response): Promise<Response> {
        const { name,
            email,
            telefone,
            status,
            id_users }:IRequest = req.body;

        try {
            const clientExists = await createAnQuery(`SELECT * FROM ${repositoryClient} WHERE email='${email}' or telefone='${telefone}'`)
            

            if(clientExists.rowCount != 0){
                return res.status(200).json( {status:200,menssage:'There  is already  one client  with this information'} );
            }

            
           
            const client = await createAnQuery(`INSERT INTO ${repositoryClient} (id_users,name,email,telefone,status,created,updated) VALUES ('${id_users}','${name}','${email}','${telefone}','1',now(),now())`)
            if(client){
                return res.status(200).json( {status:200,menssage:'client created successfully',user:{name, email,telefone:1}} );
              }
              return res.status(500).json( {status:500,menssage:'servidor error'} );
		} catch (error) {
			console.log(error)

			return res.status(500).json( {status:0,error} )
		}


      }


	async list(req: Request, res: Response) {
        const  filter  = req.query.filter
        let filterHeroes= false
		try {

			


            if(filter == 'heroes'){
                filterHeroes = true
            }


		
		} catch (error) {
			console.log(error)
			return res.status(500).json({status:0, message: 'Internal Sever Error' })
		}
	}



    async show(req: Request, res: Response) {
		const  {id}  = req.params;
		try {
            const clientExists = await createAnQuery(`SELECT * FROM ${repositoryClient} WHERE id_users=${id} and status=true `)

			if (clientExists.rowCount == 0) {
                return res.status(200).json( {status:200,menssage:'There are no client'} );
			}

			return res.status(200).json({status:200,client:clientExists.rows})
		} catch (error) {
			console.log(error)
			return res.status(500).json({status:0, message: 'Internal Sever Error' })
		}
	}

    async update(req: Request, res: Response) {
		const  {id}  = req.params
        const {
            email,
            telefone }:IRequest = req.body;
        const chaves = Object.keys(req.body);
        const valores = Object.values(req.body);

        var clientUpdatedFildes = updateClient(chaves,valores);
        
		try {
            const clientExists = await createAnQuery(`SELECT * FROM ${repositoryClient} WHERE email='${email}' or telefone='${telefone}'`)
            

            if(clientExists.rowCount != 0){
                return res.status(200).json( {status:200,menssage:'There  is already  one client  with this information'} );
            }

            const client = await createAnQuery(`UPDATE client SET ${clientUpdatedFildes} updated=now() WHERE id = ${id} `)
            console.log('update cliente', client);

            if(client.rowCount !=0){
                return res.status(200).json({status:200,menssage:'client updated successfully',client:req.body})
            }

			return res.status(500).json({status:0, message: 'Internal Sever Error' })
		} catch (error) {
			console.log(error)
			return res.status(500).json({status:0, message: 'Internal Sever Error' })
		}
	}

    async delete(req: Request, res: Response) {
		const  {id}  = req.params

		try {
            const client = await createAnQuery(`UPDATE ${repositoryClient} SET status = false WHERE id = ${id} `)

            

			if (client.rowCount == 0) {
				throw new AppEerror('There are no client')
			}


			return res.status(200).json({status:1,menssage:"client deleted successfully"})
		} catch (error) {
			console.log(error)
			return res.status(500).json({ status:0,message: 'Internal Sever Error' })
		}
	}
}
