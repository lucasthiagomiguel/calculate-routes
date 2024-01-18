import 'dotenv/config'
import 'reflect-metadata'
import {Pool} from 'pg'

const port = process.env.DB_PORT as number | undefined

export const DataSource = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'Client',
	password: '123456',
	port: 5432,
})


async function testarConexao() {
  try {
    const client = await DataSource.connect();
    console.log('Conexão com o banco de dados PostgreSQL bem-sucedida!');
    client.release();
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados PostgreSQL:', error);
  } finally {
    // Encerra a pool de conexões após o teste
    DataSource.end();
  }
}

