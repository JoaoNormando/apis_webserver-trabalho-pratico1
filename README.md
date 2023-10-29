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


### Para executar o projeto graphql-server

```
cd graphql-server
node index.js
```

Após isso, o projeto deverá estar disponível na porta 5000, com uma saída similar a essa:

***


[⬆ Voltar ao topo](#desenvolvimento-de-um-sistema-de-votação-em-tempo-real)<br>