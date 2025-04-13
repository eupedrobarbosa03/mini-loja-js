# 🛒 Sistema de Loja com Cadastro e Compras em JavaScript

Projeto de uma loja simples com funcionalidades de cadastro de usuários, cadastro de produtos e sistema de compra. Desenvolvido em **JavaScript puro**, com foco em **Programação Orientada a Objetos (POO)**, **validações com `try`, `catch`, `throw`** e saída em **formato JSON**.

---

## 🚀 Funcionalidades

- Cadastro de usuários com validações de nome, e-mail e senha
- Cadastro de produtos com verificação de nome, preço e estoque
- Simulação de compra com verificação de usuário, produto e estoque
- Atualização de estoque após compra
- Geração de relatórios em JSON

---

## 📚 Classes Criadas

### `Usuario`
Responsável por cadastrar usuários com validações de:
- Nome (string)
- E-mail (deve conter `@` e `.com`)
- Senha (mínimo 8 caracteres)

---

### `Produto`
Responsável pelo cadastro de produtos com validação de:
- Nome (string não vazia)
- Preço (número maior que 0)
- Estoque (número maior que 0)

---

### `Loja`
Gerencia o processo de compra:
- Verifica se o usuário está cadastrado
- Verifica se o produto existe
- Verifica estoque suficiente
- Atualiza o estoque após a compra
- Registra a compra em JSON

---

## 🧪 Testes

O código já contém blocos de `try/catch` para:
- Testar o cadastro de um usuário
- Testar o cadastro de um produto
- Realizar uma compra
- Exibir os dados em formato JSON com `JSON.stringify`

---


## 🧠 Objetivo

Esse projeto foi criado para treinar os pilares de POO, validações e estruturação de dados em JavaScript, servindo como base para aplicações mais complexas no futuro.

---

## 🛠️ Execução

Para executar:

1. Copie o código para um arquivo `.js` (por exemplo: `loja.js`)
2. Execute com Node.js:
```bash
node loja.js
```
