import { Request, Response } from 'express'
import { heroesRepository } from '../repositories/HeroesRepository'
import AppEerror from "../../../shared/erros/AppErrors"
import {weaponsHeroes,attributes} from '../services/makeArrayHeroes'
import { attack } from '../services/attackHeroes'
import { ageHeroes } from '../services/ageHeroes'
interface IRequest {
    name:string,
    nickname:string,
    birthday:string,
    weapons:[] | undefined,
    attributes:any,
    keyAttribute:string
  }

export  default class HeroesController {
	public async create(req: Request, res: Response): Promise<Response> {
        const { name,
            nickname,
            birthday,
            weapons,
            attributes,
            keyAttribute }:IRequest = req.body;

        try {
            const heroesExists = await heroesRepository.findOneBy({ name: String(name) })

            if(heroesExists){
                 throw new AppEerror('There  is already  one heroes  with this name')
            }

            if(ageHeroes(birthday) == null){
                throw new AppEerror('invalid date')
            }
            attack(weapons)
            ageHeroes(birthday)

            const heroes = heroesRepository.create({

                name,
                nickname,
                birthday,
                weapons:weaponsHeroes(weapons),
                attributes,
                keyAttribute
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
			const rooms = await heroesRepository.find({
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
