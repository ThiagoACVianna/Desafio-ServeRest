/* - Acessar o ServeRest
- Criar um novo usuário não sendo administrador
- Adicionar um produto a Lista
- Validar a existência deste produto na Lista de Compras */

///<reference types="cypress" />


import cadastrar from "../support/cadastro";

const faker = require('faker');




describe("Desafio", () => {
    
    it("Criar usuário não sendo administrador", () => {
        cadastrar.cadastroLogin();

        var nome = faker.name.findName()
        var email = nome.replace(' ', '').toLowerCase() + '@qa.com.br';
        
        cadastrar.preencherCadastro(faker.name.findName(), faker.internet.email(), faker.internet.password());
        cy.get('#root > div > div > form > div > div:nth-child(3) > div > a').should('have.text', "Cadastro realizado com sucesso")
    
    });

    it("Adicionar um produto na lista", () => {

        cy.get('#root > div > div > div.container-fluid > div > section > div:nth-child(3) > div > div > a:nth-child(3) > button').click();


    });

    it("Validar o produto na lista", () => {

        cy.get('#root > div > div > div > div > div > section > div > div > div:nth-child(1)').should('have.text', "Produto:Samsung 60 polegadas");


    });


});