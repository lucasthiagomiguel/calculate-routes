
import { DataSource } from '../data-source'
// Criar Tabela
DataSource.query(`

`).then().catch((err) => console.error(err));


DataSource.query(`

`).catch((err) => console.error(err));


const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        telefone VARCHAR(50),
        status boolean,
        created Date,
        updated Date
    );

    CREATE TABLE client(
        id SERIAL PRIMARY KEY,	
        id_users int NOT NULL,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100)  NOT NULL,
        telefone VARCHAR(50)  NOT NULL,
        coordenada_x NUMERIC,
        coordenada_y NUMERIC,
        status boolean,
        created Date,
        updated Date,
        FOREIGN KEY (id_Users) REFERENCES Users (id)
    );
`;

DataSource.query(createTablesQuery)
  .then(() => {
    console.log('Tabelas criadas com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao criar tabelas:', err);
  });