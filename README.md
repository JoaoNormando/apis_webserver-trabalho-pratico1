#  Implementação de API GraphQL
## Trabalho Prático 1
#### Trabalho da disciplina APIs e WebService do curso de arquitetura de software distribuído


### Solução arquitetural

> **A aplicação é composta por 2 projetos:**
> * **app**: Aplicação Express responsável por expor os endpoints de tarefas e usuarios
> * **graphql-server**: Aplcação responsável por expor as operações de Consulta e Mutações.


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão `16 do NodeJS`
* Tenha acesso administrador para configurar seu ambiente com os itens descritos no próximo tópico
* Tenha lido esse documento sobre como o projeto funciona.

## 🚀 Instalando o projeto

Para instalar o projeto, basta seguir estas etapas:

Linux e macOS:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install v16.16.0
```

Windows (Em construção):
```
```

## ☕ Usando o projeto

Para usar o projeto, basta seguir estas etapas:

Em todos os projetos, é necessário executar a instalação das dependencias. Entre nos diretórios e execute o comando:

```
npm install

```

### Para executar o projeto app:

```
cd app
nodemon index.js
```

Após isso, o projeto deverá estar disponível na porta 3000, com uma saída similar a essa:


### Lembre-se de adicionar um arquivo .env em (app/.env), para que o projeto consiga acessar o banco de dados que você disponibilizou.
### Nesse projeto, temos um Docker -compose auxiliar. Não é obrigatório o uso, apenas para facilitar você a subir seu banco Postgres

```
docker-compose up -d
```

#### Exemplo de configuração do arquivo .env

```
DATABASE_URL='postgres://postgres:postgres@localhost:5432/gestao-tarefas_db'
```

### Para executar o projeto graphql-server (É necessário rodar o APP ANTES!)

```
cd graphql-server
node index.js
```

### Lembre-se de adicionar um arquivo .env em (graphql-server/.env), para que o projeto consiga acessar o projeto app que você rodou anteriormente.

Após isso, o projeto deverá estar disponível na porta 5000, com uma saída similar a essa:

#### Exemplo de configuração do arquivo .env

```
API_URL='http://localhost:3000'
```

***


[⬆ Voltar ao topo](#desenvolvimento-de-um-sistema-de-votação-em-tempo-real)<br>