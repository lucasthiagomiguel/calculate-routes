# Awesome Project Build with TypeScript postgres
Instruções de Instalação:
    Primeiro instale node.js (versao usada nesse projeto v18.18.0), manter o mesmo nivel ou superior para que nao ocorra erro por compatibilidade.
    apos configurar todo ambiente do node. instale o postgres e configure ele por completo (versao utilizada nesse projeto Postgres 16) manter o mesmo nivel ou superior para que nao ocorra erro por compatibilidade.
    apos todas essa ferramentas configuradas.
Configuração:
    rode os comando e sigas os passos 
    1. Run `npm i` command: ele irar baixar todas as dependencias do projeto
    2. na raiz do arquivo existe um arquivo chamado .env, nele vai a configuracao inicial do projeto, preencher com as informacoes de acesso ao banco postgres
    3. apos preencher o arquivo .env, rode o comando npm run test, ele irar testar sua conexao com o banco, ocorrendo tudo certo voce deve ver uma mensagem no seu terminal com a mensagem bem sucedida, ou algum erro de conexao.
    4. apos a conexao bem sucedida execulte npm run migration:run, esse comando irar criar as tabelas necessarias para testar o projeto, voce deve ver no terminal a resposta com sucesso, ou erro.
    5. apos tudo configurado tabelas criadas, para rodar o projeto rode npm run dev, voce deve ver no terminal a mensagem testando app, isso significa que esta rodando o projeto
Estrutura do Projeto:
    A estrutura das pasta esta bem divida, dentro de src, esta arquitetado da seguinte maneira, 
    src--
        |        
         @types:serve para criar seus proprio tipos em typescript.
        |
         CONFIG:sera arquivos de configuracoes, como chaves, uploads entre outros.
        |
         MIGRATIONS:dentro dessa pasta deve encontra estrutura para criar tabelas no banco de dados
        |
         MODULES:dentro dessa pasta fica toda logica da apllicacao incluindo regras de negocio, controllers, router de cada modulo,por exemplo, tudo relacionado a usuario esta dentro da pasta users   
        |
          SHARED: dentro dessa pasta esta tudo que sera compartilhado com toda a aplicacao, como funcoes de erros, funcoes auxiliares como consultas SQL. ou seja tudo que voce precisar compartilhar o mesmo codigos em varias partes da aplicao esta dentro dessa pastas  
        |
         teste: aqui esta tudo relacionado a teste da aplicacao, como teste automatizados, entre outros tipos de teste que precise fazer
        |
        por ultimo um arquivo na raiz que esta fazendo a configuracao do banco, poderia ter posto dentro da pasta config,mas decidi deixar ali para facilitar mais
Título e Descrição:
    essa aplicacao tem com o objetivo voce se cadastra em usuarios como "empresa" apos efeituar seu cadastro voce pode cadastrar seus clientes e as coordenadas deles, a aplicacao irar atrelas todos os seus cliente a seu login entao toda vez que voce logar vera apenas tudo relacionado ao seu perfil, podendo editar, cadastrar novos, e tracar rotas, por exemplo voce deve cadastrar seus clientes com as coordenadas deles e a aplicacao mostrar a melhor pordem para ir ate seus clientes    

