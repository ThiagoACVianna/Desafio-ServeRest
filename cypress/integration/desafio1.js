///<reference types="cypress" />


import cadastrar from "../support/cadastro";

const faker = require('faker');
faker.locate = 'pt_BR'

//var nome = faker.name.findName()
//var email = nome.replace('', '').toLowerCase() + '@qa.com.br';


describe("Desafio", () => {
    
    it("Criar usuário não sendo administrador", () => {
        cadastrar.cadastroLogin()
        cadastrar.preencherCadastro(faker.name.findName(), faker.internet.email(), faker.internet.password());
        cy.get('#root > div > div > form > div > div:nth-child(3) > div > a').should('have.text', "Cadastro realizado com sucesso");
        
    });

    it("Adicionar um produto na lista", () => {

        cy.get('[data-testid=adicionarNaLista]').first().click();


    });

    it("Validar o produto na lista", () => {

        cy.get('h1').should('have.text', "Lista de Compras");
    

    });


});