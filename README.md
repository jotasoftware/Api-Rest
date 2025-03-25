# Minha Primeira API REST com Express

> Este projeto é minha primeira API REST desenvolvida utilizando Express. A API fornece endpoints para gerenciar usuários, alunos e fotos, aplicando autenticação, validação e estrutura organizada seguindo boas práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL
- JWT (JSON Web Token)
- Multer (Upload de arquivos)
- ESLint

## 📂 Estrutura do Projeto

```
├── .env
├── .eslintrc.js
├── .gitignore
├── .sequelizerc
├── README.md
├── dist
    ├── app.js
    ├── config
    │   ├── app.js
    │   ├── database.js
    │   └── multer.js
    ├── controllers
    │   ├── AlunoController.js
    │   ├── FotoController.js
    │   ├── HomeController.js
    │   ├── TokenController.js
    │   └── UsuarioController.js
    ├── database
    │   ├── index.js
    │   ├── migrations
    │   │   ├── 20240206001552-alunos.js
    │   │   ├── 20240207182220-users.js
    │   │   ├── 20240306224827-mudar-email-aluno-unique.js
    │   │   └── 20240311140452-criar-tabela-de-foto-do-aluno.js
    │   └── seeds
    │   │   └── 20240305130905-criar-usuarios.js
    ├── middlewares
    │   └── loginRequired.js
    ├── models
    │   ├── Foto.js
    │   ├── User.js
    │   └── Usuario.js
    ├── routes
    │   ├── alunoRoutes.js
    │   ├── fotoRoutes.js
    │   ├── homeRoutes.js
    │   ├── tokenRoutes.js
    │   └── usuarioRoutes.js
    └── server.js
```

## 🔧 Como Usar

1. Clone este repositório.
2. Instale as dependências com `npm install`.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Execute as migrações do banco de dados com `npx sequelize db:migrate`.
5. Inicie o servidor com `npm start`.

## 🛠️ Funcionalidades

- ✅ CRUD de usuários e alunos.
- ✅ Upload de fotos utilizando Multer.
- ✅ Autenticação com JWT.
- ✅ Proteção de rotas com middleware.
- ✅ Banco de dados gerenciado com Sequelize.


