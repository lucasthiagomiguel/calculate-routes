import 'dotenv/config'
import 'reflect-metadata'
import {Pool} from 'pg'

const port = process.env.DB_PORT as number | undefined

export const DataSource = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	port: port,
})

