# 🍔 Cardápio Digital - React App

Projeto desenvolvido para a disciplina de **Desenvolvimento Web**. O objetivo foi criar uma aplicação Front-End simulando a visão do consumidor de um cardápio digital, aplicando conceitos modernos de React e SPA (Single Page Application).

## 👥 Integrantes
* **Enildo Martins**
* **Maria Eduarda Goetz**

---

## 📚 5 Conteúdos Aplicados
Conforme solicitado na especificação do trabalho, aplicamos os seguintes conteúdos ministrados em aula:

1.  **Componentização e Props:** Criação de componentes reutilizáveis (`CardPrato`, `Navbar`) recebendo dados dinâmicos via props.
2.  **React Hooks (useState & useEffect):** Gerenciamento de estado local para o carrinho de compras e efeitos colaterais para persistência de dados.
3.  **React Router DOM:** Implementação de rotas para navegação SPA (Single Page Application) entre a vitrine (Home) e o Carrinho.
4.  **Local Storage:** Persistência dos itens do carrinho no navegador, garantindo que os dados não se percam ao atualizar a página.
5.  **Testes Unitários:** Configuração do ambiente de testes com Vitest e criação de casos de teste para validar a renderização e lógica dos componentes.

---

## 🚀 Tecnologias Utilizadas

* [React](https://reactjs.org/) (com Vite)
* [Tailwind CSS](https://tailwindcss.com/) (Estilização responsiva)
* [React Router DOM](https://reactrouter.com/) (Navegação)
* [Vitest](https://vitest.dev/) (Testes Unitários)

---

## ⚙️ Como rodar o projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passo a passo

1.  Clone o repositório ou baixe os arquivos.
2.  Abra o terminal na pasta do projeto.
3.  Instale as dependências:
```bash
    npm install
```
4.  Execute o servidor de desenvolvimento:
```bash
    npm run dev
```
5.  Acesse o link gerado no terminal (geralmente `http://localhost:5173`).

---

## 🧪 Como rodar os testes

Para verificar se a lógica dos componentes está funcionando corretamente, execute:
```bash
npm run test
```

---

## 📂 Estrutura de Pastas

O projeto foi organizado para manter a escalabilidade e clareza do código:
```
src/
├── components/      # Componentes visuais reutilizáveis (Botões, Cards, Navbar)
├── data/            # Mock de dados (Lista de produtos/pratos)
├── pages/           # Páginas principais da aplicação (Home, Carrinho)
├── App.jsx          # Componente principal e gerenciamento de rotas/estado
└── main.jsx         # Ponto de entrada da aplicação
```

---

## ✨ Funcionalidades

* ✅ Listagem de Produtos: Visualização de pratos com fotos, descrição e preço.
* ✅ Adicionar ao Carrinho: Botão interativo que insere itens na lista de pedidos.
* ✅ Remover do Carrinho: Possibilidade de excluir itens indesejados.
* ✅ Contador no Menu: Indicador visual da quantidade de itens no carrinho.
* ✅ Persistência: O carrinho não "zera" se você der F5 na página.
* ✅ Responsividade: Layout adaptável para Celulares e Computadores (Grid Layout).