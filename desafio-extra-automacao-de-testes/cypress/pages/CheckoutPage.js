class CheckoutPage {
    preencherDados(nome, sobrenome, cep) {
        cy.get('[data-test="firstName"]').type(nome)
        cy.get('[data-test="lastName"]').type(sobrenome)
        cy.get('[data-test="postalCode"]').type(cep)
    }

    continuar() {
        cy.get('[data-test="continue"]').click()
    }

    finalizar() {
        cy.get('[data-test="finish"]').click()
    }

    validarOverview() {
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview')
    }

    validarFinalizacao() {
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!')
    }
}

export default new CheckoutPage()