import { Request, Response } from 'express'
import { heroesRepository } from '../repositories/HeroesRepository'
import AppEerror from "../../../shared/erros/AppErrors"
import {weaponsHeroes,lisAllheroes} from '../services/makeArrayHeroes'
import { ageHeroes } from '../services/ageHeroes'
import { attrHeroes } from '../services/atributos'
import { strict } from 'assert'
import { ObjectId } from 'mongodb'
interface IRequest {
    name:string,
    nickname:string,
    birthday:string,
    weapons:[] | undefined,
    attributes:any,
    keyAttribute:string,
    status:number,
    id_users:string
  }

export  default class HeroesController {
	public async create(req: Request, res: Response): Promise<Response> {
        const { name,
            nickname,
            birthday,
            weapons,
            attributes,
            keyAttribute,
            id_users }:IRequest = req.body;

        try {
            const heroesExists = await heroesRepository.findOneBy({ name: String(name) })

            if(heroesExists){
                 throw new AppEerror('There  is already  one heroes  with this name')
            }

            if(ageHeroes(birthday) == null){
                throw new AppEerror('invalid date')
            }
            attrHeroes(2)
            const heroes = heroesRepository.create({

                name,
                nickname,
                birthday,
                weapons:weaponsHeroes(weapons),
                attributes,
                keyAttribute,
                status:1,
                id_users
            })
            await heroesRepository.save(heroes)


            return res.status(200).json({status:1,heroes});
		} catch (error) {
			console.log(error)

			return res.status(500).json( {status:0,error} )
		}


      }


	async list(req: Request, res: Response) {
        const  filter  = req.query.filter
        let filterHeroes= false
		try {

			const heroesList = await heroesRepository.find({
                where: {
                    status: 1,

                },
			})
            if(!heroesList){
                throw new AppEerror('There are no heroes')

            }


            if(filter == 'heroes'){
                filterHeroes = true
            }

            const listAllHeroes = lisAllheroes(heroesList,filterHeroes)
            console.log(listAllHeroes)
            if(listAllHeroes == null){
                return res.status(200).json({status:0,message:"nao existe heroes"})
            }

			return res.status(200).json(listAllHeroes)
		} catch (error) {
			console.log(error)
			return res.status(500).json({status:0, message: 'Internal Sever Error' })
		}
	}



    async show(req: Request, res: Response) {
		const  {id}  = req.params

		try {
            const heroes = await heroesRepository.findOneBy({ _id: new ObjectId(id) })
            console.log(heroes)

			if (!heroes) {
				throw new AppEerror('There are no heroes')
			}



			return res.status(200).json(heroes)
		} catch (error) {
			console.log(error)
			return res.status(500).json({status:0, message: 'Internal Sever Error' })
		}
	}

    async update(req: Request, res: Response) {
		const { nickname } = req.body
		const  {id}  = req.params

		try {
            const heroes = await heroesRepository.findOneBy({ _id: new ObjectId(id) })
            console.log(heroes)

			if (!heroes) {
				throw new AppEerror('There are no heroes')
			}



			const heroesUpdate = {
				...heroes,
				nickname: nickname,
			}
            await heroesRepository.save(heroesUpdate)


			return res.status(200).json({status:1,heroesUpdate})
		} catch (error) {
			console.log(error)
			return res.status(500).json({status:0, message: 'Internal Sever Error' })
		}
	}

    async delete(req: Request, res: Response) {
		const  {id}  = req.params

		try {
            const herores = await heroesRepository.findOneBy({ _id: new ObjectId(id) })

			if (!herores) {
				throw new AppEerror('There are no heroes')
			}



			const heroresUpdate = {
				...herores,
				status: 0,
			}
            await heroesRepository.save(heroresUpdate)


			return res.status(200).json({status:1,menssage:"deletado com sucesso"})
		} catch (error) {
			console.log(error)
			return res.status(500).json({ status:0,message: 'Internal Sever Error' })
		}
	}
}
