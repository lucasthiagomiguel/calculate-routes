import {DataSource} from '../data-source'

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

testarConexao()