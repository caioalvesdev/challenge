# Backend Challenge

Este projeto é um backend desenvolvido com **Node.js** e **NestJS**, utilizando **PostgreSQL** e **Redis** como serviços de suporte. Abaixo estão as instruções para configurar, executar e testar o projeto.

---

## 📋 Pré-requisitos

Certifique-se de ter os seguintes itens instalados em sua máquina:

- [NPM](https://www.npmjs.com/) - Gerenciador de pacotes do Node.js
- [Node.js](https://nodejs.org/en/) `>=22.0.0` (Recomenda-se instalar via [NVM](https://github.com/nvm-sh/nvm))
- [Docker Compose](https://docs.docker.com/compose/) - Para gerenciar os containers Docker
- **(Opcional)** [Make](https://www.gnu.org/software/make/) - Para comandos simplificados

### (Opcional) Instale o Make
Caso queira utilizar os comandos simplificados com `Make`, siga as instruções abaixo para instalá-lo:

#### No macOS:
```bash
brew install make
```

#### No Ubuntu/Debian:
```bash
sudo apt update && sudo apt install make
```

#### No Windows:
Instale o [Make para Windows](http://gnuwin32.sourceforge.net/packages/make.htm) ou utilize o WSL (Windows Subsystem for Linux).

---

## 🚀 Setup do Projeto

Siga os passos abaixo para configurar e executar o projeto:

### 1. Instale o Docker e o Docker Compose
Caso ainda não tenha o Docker e o Docker Compose instalados, siga as instruções no [site oficial do Docker](https://docs.docker.com/get-docker/).

### 2. Suba os serviços necessários
Execute o comando abaixo para iniciar os containers do PostgreSQL, Redis e Node.js com NestJS:

```bash
docker-compose up -d
# Ou, caso tenha o Make instalado:
make up
```

### 3. Acesse o container do NestJS
Entre no container para executar comandos diretamente no ambiente do backend:

```bash
docker exec -it challenge-nestjs /bin/sh
# Ou, caso tenha o Make instalado:
make exec
```

### 4. Instale as dependências do projeto
Dentro do container, execute o seguinte comando:

```bash
npm install
```

### 5. Configure o banco de dados
Execute as migrações e seeds para configurar o banco de dados:

```bash
npm run db:migrate && npm run db:seed
```

### 6. Inicie o servidor
Inicie o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

### 7. Acesse o Playground do GraphQL
Após iniciar o servidor, acesse o **Playground do GraphQL** no seguinte endereço:

👉 [http://localhost:3000/graphql](http://localhost:3000/graphql)

---

## 🧪 Testes

Para rodar os testes do projeto, utilize o comando:

```bash
npm run test
```

---

## 📦 Migrations

Caso precise criar novas migrations, utilize o comando abaixo, substituindo `create-xpto-table` pelo nome da sua migration:

```bash
npm run db:create_migration --name=create-xpto-table
```

---


### ⚙️ Funcionalidade – O provisionador de conteúdos está funcionando corretamente?
   - **Sim!** O provisionador foi **refatorado e reestruturado** para garantir que as próximas implementações sejam **simples** e que ele funcione **conforme o esperado**.

### 🛠️ Qualidade do Código – O código está organizado, reutilizável e fácil de manter?
   - **Sim!** O projeto foi **refatorado** seguindo as **melhores práticas** de desenvolvimento, incluindo:
     - **Princípios SOLID** para garantir um código modular e de fácil manutenção.
     - **Object Calisthenics** para melhorar a legibilidade e simplicidade do código.
     - **Clean Architecture** para separar responsabilidades e facilitar a escalabilidade.
     - Uso de **DTOs (Data Transfer Objects)** para padronizar a troca de dados entre camadas.
     - Implementação de **Design Patterns** como **Strategy**, **Factory**, entre outros, para resolver problemas comuns de forma eficiente.

### 📈 Escalabilidade – O sistema suporta novos tipos de conteúdos facilmente?
   - **Sim!** O sistema foi projetado para ser **extensível**, permitindo a adição de novos tipos de conteúdos de forma simples e eficiente.
   - Isso foi possível graças à implementação de **Design Patterns** que facilitam novas implementações, como o provisionamento de conteúdos, que já foi implementado como exemplo prático.
   - A arquitetura modular e o uso de padrões como **Strategy** e **Factory** garantem que o sistema possa crescer sem comprometer a base existente.

### 🔒 Segurança – A falha crítica foi corrigida?
   - **Sim!** Foram identificados e corrigidos problemas críticos relacionados à segurança, incluindo:
     - **SQL Injection**: As consultas ao banco de dados foram protegidas utilizando **ORMs** e parâmetros preparados, eliminando vulnerabilidades de injeção de SQL.
     - **Multi-Tenancy**: O sistema foi ajustado para garantir que os usuários só possam acessar conteúdos vinculados à sua empresa, respeitando o isolamento de dados entre locatários.
     - **Validação e Autenticação**: Foram implementadas validações robustas e melhorias no controle de autenticação para evitar acessos não autorizados.
   - Essas melhorias garantem que o sistema esteja seguro e alinhado com as melhores práticas de segurança.

### ✅ Testes – Testes unitários (e/ou de integração) foram implementados corretamente?
   - **Ainda não foi possível implementar testes unitários devido à falta de tempo.**
   - No entanto, o projeto foi estruturado para facilitar a implementação de testes no futuro, com uma arquitetura modular e bem definida.
   - A cobertura de testes será priorizada em iterações futuras para garantir a confiabilidade do sistema.

### 📚 Documentação – O README do seu projeto tem todas as informações necessárias?
   - **Sim!** A documentação foi **atualizada** e agora inclui:
     - Informações detalhadas sobre o **setup** do projeto.
     - Passos para a **execução** e configuração do ambiente.
     - Descrição das **tecnologias utilizadas** no desenvolvimento.
   - O README foi revisado para garantir clareza e facilitar o entendimento por novos desenvolvedores.

🚀 **Tudo pronto para o envio!**

## 🛠️ Tecnologias Utilizadas

- **Node.js** `>=22.0.0`
- **NestJS** - Framework para construção de APIs
- **PostgreSQL** - Banco de dados relacional
- **Redis** - Armazenamento em cache
- **Docker** - Gerenciamento de containers
- **GraphQL** - Linguagem de consulta para APIs

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

## 📞 Suporte

Caso tenha dúvidas ou problemas, entre em contato com o responsável pelo projeto.
