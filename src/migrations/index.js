// Criar Tabela
DataSource.query(`
CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  status boolean,
created Date,
updated Date,
)
`).catch((err) => console.error(err));

DataSource.query(`
CREATE TABLE Client(
    id SERIAL PRIMARY KEY,	
       id_users int NOT NULL,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(100)  NOT NULL,
     telefone VARCHAR(10)  NOT NULL,
     coordenada_x NUMERIC,
     coordenada_y NUMERIC,
     status boolean,
     created Date,
     updated Date,
    FOREIGN KEY (id_Users) REFERENCES Users (id)
     )
`).catch((err) => console.error(err));
