
☕ Desafio Técnico – API de Gestão de Pedidos de Cafeteria

Olá! Este projeto é a solução para o desafio técnico da vaga Node.js. Nele, desenvolvi uma API REST para gerenciar pedidos de uma cafeteria, usando Node.js, NestJS, Prisma ORM e PostgreSQL.

📚 Funcionalidades

- Criar um novo pedido  
  - Campos: cliente, item, quantidade, observações.
- Listar todos os pedidos cadastrados
- Atualizar o status de um pedido (Ex: PREPARING, READY, DELIVERED)
- Buscar pedidos filtrando por status

⚠️ Observação Importante:
Antes de criar um pedido, é necessário primeiro **cadastrar um usuário** e um **produto**.  
Use as rotas de criação de usuários e produtos antes de criar um pedido.

🚀 Tecnologias Utilizadas

- Node.js
- NestJS
- Prisma ORM
- PostgreSQL
- class-validator e class-transformer para validação dos dados
- dotenv para variáveis de ambiente

📂 Estrutura do Projeto

projeto-cafeteria/
├── src/
│   ├── orders/
│   ├── users/
│   ├── products/
│   └── app.module.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── .env.example
└── README.md


🛠️ Como rodar o projeto localmente

1) Clone o repositório: 
 git clone https://github.com/Murilo517/projeto-cafeteria.git

Navegue para a pasta: cd projeto-cafeteria

3) Instale as dependências
 npm install

4) Configure o banco de dados

- Copie o arquivo .env.example e renomeie para .env.
- Ajuste a variável DATABASE_URL com as credenciais do seu banco PostgreSQL.

Exemplo para PostgreSQL:
DATABASE_URL="postgresql://usuario:senha@localhost:5432/cafeteria"

4) Rode as migrações
 npx prisma migrate dev

5) Inicie a API
 npm run start:dev

A API estará disponível em: http://localhost:3000


📋 Rotas da API

🔹 Criar Usuário

POST /users

{
  "name": "João da Silva",
  "email": "joao@gmail.com"
}

🔹 Listar Usuários

GET /users

🔹 Criar Produto

POST /products

{
  "name": "Café Expresso",
  "price": 5.5
}

🔹 Listar Produtos

GET /products

🔹 Criar Pedido

POST /orders

{
  "userId": 1,
  "productId": 1,
  "quantity": 2,
  "notes": "Sem açúcar"
}

🔹 Listar Todos os Pedidos

GET /orders

🔹 Atualizar Status de um Pedido

PATCH /orders/:id/status

{
  "status": "READY"
}

🔹 Buscar Pedidos por Status

GET /orders/filter/status?status=READY

Valores possíveis para status:
- PREPARING
- READY
- DELIVERED



✨ Diferenciais Implementados

- ✅ Validação com class-validator e class-transformer
- ✅ Organização em Controllers e Services
- ✅ Middleware global para tratamento de erros
- ✅ Scripts de migração com Prisma
- ✅ Código limpo e modular seguindo boas práticas
