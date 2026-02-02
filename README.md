# 📝 Blog com Next.js e Supabase

![Next.js](https://img.shields.io/badge/Next.js-latest-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)

## 📋 Sobre o Projeto

Blog moderno e responsivo desenvolvido com Next.js, integrado com Supabase como banco de dados. O projeto foi criado como parte do desafio da DIO (Digital Innovation One), implementando funcionalidades de listagem e visualização de posts armazenados em um banco de dados real.

## ✨ Funcionalidades

- ✅ **Listagem de Posts**: Página inicial exibindo todos os posts cadastrados
- ✅ **Detalhes do Post**: Página individual para visualizar o conteúdo completo de cada post
- ✅ **Integração com Supabase**: Consumo de API REST do Supabase para gerenciamento de dados
- ✅ **Design Responsivo**: Interface adaptável para todos os tamanhos de tela
- ✅ **Modo Escuro**: Suporte a tema claro e escuro
- ✅ **Server-Side Rendering (SSR)**: Carregamento otimizado com Next.js

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React para produção
- **[React](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Supabase](https://supabase.com/)** - Backend as a Service (BaaS)
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições
- **[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** - Renderização de conteúdo MDX

## 🎯 O que foi Implementado por Mim

### 1. Integração com API Supabase
- Configuração do cliente Axios com autenticação
- Implementação das funções `getPosts()` e `getPostBySlug()`
- Tratamento de erros e logs para debugging

### 2. Páginas Dinâmicas
- Ajuste da página inicial (`index.js`) para consumir dados da API
- Correção de bugs (typo `created_ate` → `created_at`)
- Implementação da página de detalhes do post (`[id].js`)

### 3. Configurações e Correções
- Correção do caminho do `tailwind-preset` no `tailwind.config.js`
- Ajuste dos imports dos componentes para a estrutura de pastas correta
- Configuração do ambiente de desenvolvimento

## 📂 Estrutura do Projeto

```
📦 dio-desafio-blog
 ┣ 📂 components/          # Componentes React reutilizáveis
 ┣ 📂 src/
 ┃ ┣ 📂 pages/            # Páginas Next.js
 ┃ ┃ ┣ 📂 posts/
 ┃ ┃ ┃ ┗ 📜 [id].js       # Página de detalhes do post (implementado)
 ┃ ┃ ┣ 📜 index.js        # Página inicial (modificado)
 ┃ ┃ ┗ 📜 _app.js
 ┃ ┣ 📂 services/
 ┃ ┃ ┗ 📜 api.js          # Configuração Axios/Supabase (implementado)
 ┃ ┗ 📂 utils/
 ┃   ┣ 📜 mdx-utils.js    # Funções de API (implementado)
 ┃   ┗ 📜 global-data.js
 ┣ 📂 styles/
 ┣ 📜 package.json
 ┣ 📜 tailwind.config.js  # Configuração Tailwind (corrigido)
 ┗ 📜 README.md
```

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 14+
- Yarn ou npm

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/dio-desafio-blog.git
cd dio-desafio-blog
```

2. Instale as dependências
```bash
yarn install
# ou
npm install
```

3. Configure as variáveis de ambiente (opcional)
```bash
# Crie um arquivo .env.local
BLOG_NAME=DIO Blog
BLOG_TITLE=Blog em NextJS
BLOG_FOOTER_TEXT=All rights reserved.
```

4. Execute o servidor de desenvolvimento
```bash
yarn dev
# ou
npm run dev
```

5. Acesse http://localhost:3000 no navegador

## 🗄️ Estrutura do Banco de Dados (Supabase)

Tabela: `posts`

| Coluna       | Tipo      | Descrição                    |
|--------------|-----------|------------------------------|
| id           | bigint    | ID único do post (PK)        |
| title        | text      | Título do post               |
| description  | text      | Descrição/resumo             |
| body         | text      | Conteúdo completo do post    |
| created_at   | timestamp | Data de criação              |

## 🎨 Preview

![Preview da aplicação](https://via.placeholder.com/800x400/1e293b/ffffff?text=Blog+Preview)

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido como parte do desafio da **Digital Innovation One (DIO)**

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
