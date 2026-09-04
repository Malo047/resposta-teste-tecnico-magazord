import CheckoutPage from "../pages/CheckoutPage"

describe('login', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  it('login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').contains('Products')
  })

  it('login com falha', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('admin')
    cy.get('[data-test="password"]').type('admin')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
  })
})

describe('Manipulação de produtos', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  it('adicionar produto', () => {
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').contains(1)
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-badge"]').contains(2)
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="title"]').contains('Your Cart')
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Backpack')
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Bike Light')
  })

  it('remover produto', () => {
    cy.login()
    cy.adicionarNoCarrinho()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should("have.text", "Sauce Labs Backpack")
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should("not.exist")
  })
})
describe('Checkout', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  it('checkout', () => {
    cy.login()
    cy.adicionarNoCarrinho()

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.gerarDadosCheckout().then((user) => {
      CheckoutPage.preencherDados(user.nome, user.sobrenome, user.cep)
    })

    CheckoutPage.continuar()
    CheckoutPage.validarOverview()
    CheckoutPage.finalizar()
    CheckoutPage.validarFinalizacao()
  })
})