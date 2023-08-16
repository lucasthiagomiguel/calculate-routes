import { Request, Response } from 'express'
import { heroesRepository } from '../repositories/HeroesRepository'
import AppEerror from "../../../shared/erros/AppErrors"
import {weaponsHeroes,lisAllheroes} from '../services/makeArrayHeroes'
import { ageHeroes } from '../services/ageHeroes'
import { attrHeroes } from '../services/atributos'
interface IRequest {
    name:string,
    nickname:string,
    birthday:string,
    weapons:[] | undefined,
    attributes:any,
    keyAttribute:string,
    status:boolean,
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


            return res.json(heroes);
		} catch (error) {
			console.log(error)

			return res.status(500).json( error )
		}


      }


	async list(req: Request, res: Response) {
		try {
			const heroesList = await heroesRepository.find({

			})
            if(!heroesList){
                throw new AppEerror('There are no heroes')

            }


            const listAllHeroes = lisAllheroes(heroesList)

			return res.json(listAllHeroes)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}
}
