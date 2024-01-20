Projeto Incrível Desenvolvido com TypeScript e PostgreSQL
Instruções de Instalação:
Primeiro, instale o Node.js (versão utilizada neste projeto: v16). Mantenha a mesma versão ou superior para evitar erros de compatibilidade.
Após configurar todo o ambiente Node.js, instale o PostgreSQL e faça a configuração completa (versão utilizada neste projeto: PostgreSQL 16). Mantenha a mesma versão ou superior para evitar erros de compatibilidade.
Com todas essas ferramentas configuradas,
Configuração:
Rode os comandos e siga os passos:

Execute o comando npm i: ele irá baixar todas as dependências do projeto.
Na raiz do arquivo, existe um arquivo chamado .env. Nele, estão as configurações iniciais do projeto. Preencha com as informações de acesso ao banco PostgreSQL.
Após preencher o arquivo .env, execute o comando npm run test. Ele irá testar sua conexão com o banco. Se tudo estiver correto, você deve ver uma mensagem no seu terminal indicando sucesso ou algum erro de conexão.
Após a conexão bem-sucedida, execute npm run migration:run. Este comando criará as tabelas necessárias para testar o projeto. Você deve ver no terminal uma resposta indicando sucesso ou erro.
Com todas as configurações e tabelas criadas, para rodar o projeto, execute npm run dev. Você deve ver no terminal a mensagem "Testando app", indicando que o projeto está rodando.
Estrutura do Projeto:
A estrutura de pastas está bem organizada dentro de src:

@types: Serve para criar seus próprios tipos em TypeScript.
CONFIG: Arquivos de configuração, como chaves, uploads, entre outros.
MIGRATIONS: Contém a estrutura para criar tabelas no banco de dados.
MODULES: Toda a lógica da aplicação, incluindo regras de negócio, controllers, routers de cada módulo. Por exemplo, tudo relacionado a usuários está dentro da pasta users.
SHARED: Contém funcionalidades compartilhadas em toda a aplicação, como funções de erros, funções auxiliares (consultas SQL, por exemplo).
teste: Aqui estão todos os relacionados a testes da aplicação, como testes automatizados e outros tipos de teste necessários.
Um arquivo na raiz configura o banco de dados. Poderia estar dentro da pasta config, mas optei por deixá-lo ali para facilitar.
Título e Descrição:
Esta aplicação tem como objetivo cadastrar usuários como "empresas". Após o cadastro, você pode cadastrar seus clientes e suas coordenadas. A aplicação vinculará todos os seus clientes ao seu login, então, sempre que você fizer login, verá apenas informações relacionadas ao seu perfil. Você pode editar, cadastrar novos clientes e traçar rotas. Por exemplo, ao cadastrar clientes com suas coordenadas, a aplicação mostrará a melhor ordem para visitá-los.