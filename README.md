# Finance AI

Finance AI é uma aplicação web voltada para o gerenciamento e análise financeira inteligente. Utilizando um conjunto robusto de tecnologias modernas, o projeto busca oferecer uma plataforma intuitiva e eficiente para análise e gestão financeira, com foco em acessibilidade e performance.

---

## Tecnologias Utilizadas

- **Next.js** - Framework React para criação de aplicações web otimizadas e com server-side rendering.
- **React.js** - Biblioteca para construção de interfaces de usuário dinâmicas e responsivas.
- **PostgreSQL** - Banco de dados relacional para armazenamento seguro e escalável de informações financeiras.
- **Tailwind CSS** - Biblioteca de estilos para desenvolvimento rápido e design responsivo.
- **Prisma** - ORM para manipulação eficiente do banco de dados, integrado ao PostgreSQL.
- **Node.js** - Plataforma para construção do back-end e APIs.
- **ShadCN** - Biblioteca de componentes UI pré-construídos, otimizados para Next.js e React.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática, auxiliando no desenvolvimento seguro e escalável.
- **JavaScript** - Linguagem principal do front-end para construção de funcionalidades dinâmicas.

---

## Funcionalidades

- **Dashboard Financeiro**: Visualize rapidamente o resumo financeiro com gráficos e dados essenciais.
- **Gerenciamento de Transações**: Adicione, edite e exclua transações de forma fácil e intuitiva.
- **Relatórios Personalizados**: Gere relatórios com filtros variados, como categoria, data e valor.
- **Análise de Gastos e Receitas**: Obtenha insights sobre seus hábitos financeiros através de gráficos e estatísticas.
- **Suporte Multiusuário**: Controle de acessos e perfis, permitindo que diversos usuários acessem suas próprias contas.
- **Segurança de Dados**: Armazenamento seguro e autenticação para proteção das informações financeiras dos usuários.

---

## Pré-requisitos

- **Node.js**: versão 14 ou superior
- **PostgreSQL**: configurado e rodando localmente ou em uma instância de banco de dados acessível

---

## Instalação e Configuração

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/usuario/finance-ai.git
   cd finance-ai
   ```

2. **Instale as Dependências**:

   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados**:
   Configure as variáveis de ambiente no arquivo `.env`, incluindo as credenciais para o PostgreSQL:

   ```plaintext
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
   ```

4. **Migração do Banco de Dados**:
   Utilize o Prisma para criar as tabelas e relacionamentos no banco de dados.

   ```bash
   npx prisma migrate dev
   ```

5. **Inicie o Servidor de Desenvolvimento**:

   ```bash
   npm run dev
   ```

6. **Acesse a Aplicação**:
   Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

---

## Scripts Disponíveis

- **`npm run dev`** - Inicia o ambiente de desenvolvimento
- **`npm run build`** - Compila a aplicação para produção
- **`npm run start`** - Inicia o servidor em modo de produção
- **`npx prisma migrate dev`** - Realiza as migrações no banco de dados
- **`npx prisma studio`** - Interface gráfica para visualizar e manipular dados no banco de dados

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch com a funcionalidade ou correção: `git checkout -b feature/nova-funcionalidade`.
3. Commit suas mudanças: `git commit -m 'Descrição da nova funcionalidade'`.
4. Faça o push para a branch: `git push origin feature/nova-funcionalidade`.
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a licença MIT. Para mais informações, consulte o arquivo [LICENSE](./LICENSE).

---

## Contato

Para dúvidas ou sugestões, entre em contato através de [grazzianofagundes@gmail.com](mailto:grazzianofagundes@gmail.com).
