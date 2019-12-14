# React SystemCRUD.app

## Instalação

**NOTA:** Para executar qualquer um dos comandos abaixo, é imprescindível ter o gerenciador de dependência NPM instalado globalmente em seu computador, e nagevar para dentro do diretório root da aplicação para que todos os comandos possam ser executados com sucesso.

### Instalação local

Para fazer a instalação de todas as dependências da aplicação, execute a seguinte linha de comando no terminal.

    npm install

**Nota**: Se após a intalação você receber informações de vulnerabilidades nas dependências instaladas, execute o seguinte comando para corrigir eventuais vulnerabilidades.

    npm audit fix && npm audit fix --force

### Modo desenvolvimento - Frontend

Os arquivos do código fonte da aplicação estão contidos dentro do diretório `./src`.
Após concluir a instalação de todas as dependências da aplicação, é possível executar o comando de desenvolvimento no terminal.

    npm run dev

Depois de executar o comando acima, abra [http://localhost:3000](http://localhost:3000) para renderizar a aplicação no seu browser preferido.
A página será recarregada sempre que fizer edições no seu código fonte, você também verá quaisquer eventuais erros no código no seu console e no próprio browser.

**NOTA**: É necessário executar o servidor JSON em paralelo com o comando `npm run dev`, desta forma, abra uma outra aba em seu terminal e execute o servidor backend com o comando `npm run back`. Então o servidor backend sera executado na porta 3030.

### Modo produção

Este comando cria os arquivos de produção dentro do diretório ./build e inicia um servidor Express para servir a aplicação em questão. Os arquivos de produção são transpilados e minificados para obter uma melhor performance e otimização de trafego de dados ao acessar a aplicação. Para construir a aplicação em modo producão, execute o seguinte comando

    npm run start

**NOTA**: É necessário executar o servidor JSON em paralelo com o comando `npm run start`, desta forma, execute também o servidor backend com o comando `npm run back`. Então o servidor backend sera executado na porta 3030.

### Server-side - Backend

O JSON-server irá servir o ambiente client-side com os dados persistidos no arquivo `./backend/db.json`. Rode no terminal o seguinte comando para iniciar o server-side(Back-end).

    npm run back

Após executar o comando `npm run back` você pode usar o seu navegador para verificar a lista de usuários cadastrados na base de dados em [http://localhost:3030/users](http://localhost:3030/users).

**NOTA**: O JSON-server esta configurado para usar a porta **3030**. Caso precise alterar a porta do JSON-server, mude a propriedade **back** em **scripts** no arquivo `./package.json`, também é necessário alterar o endpoint usado no front-end, altere endpoint no arquivo `./src/app/views/admin/index.jsx`.

### Construção do projeto

Este comando cria os arquivos de produção dentro do diretório `./build`. Os arquivos de produção são compilados para a versão ES5 do JS.
Para construir a aplicação em modo producão, execute o seguinte comando:

    npm run build

## Metodologia e arquitetura

Levando em consideração que menos é mais(code clean), acredito que não seja necessário a implementação de uma dependência como Redux nesta aplicação, visando mantê-la mais enxuta possível em todos os níveis. Até cogitei implementar a metodologia Flux, para que os componentes pudessem se comunicar entre si, mas ao invés disso, utilizei as técnicas de fluxo de dados unidirecional(one-way data flow) do React mantendo tudo rápido e fluído. Fazendo uma analogia, é como se a arquitetura da aplicação fosse uma fonte de água, onde o fluxo de água escorre de cima para baixo(elevate state). Tudo aqui é dividido, componentes e folhas de estilos e suas respectivas responsabilidades, ou seja, cada parte da aplicacão, por menor que seja, foi componentizada/modularizada, tanto os arquivos .jsx quanto os .scss.

## Principais tecnologias integradas

- [x] Axios
- [x] Babel
- [x] Bootstrap
- [x] ESlint
- [x] Express
- [x] Fontawesome
- [x] Git
- [x] JavaScript
- [x] Json-server
- [x] JSX
- [x] Loading-skeleton
- [x] Nodejs
- [x] NPM
- [x] Prop-types
- [x] React
- [x] SCSS
