describe('template spec', () => {
  it.skip('passes', () => {

    cy.visit('https://demoqa.com/')

    cy.get('div.home-body > div > div:nth-child(1)').click({force:true})
    cy.url().should('eq', 'https://demoqa.com/elements')

    cy.get('div.col-12.mt-4.col-md-6')
    .should('have.text', 'Please select an item from left to start practice.')
    .should('exist')
    .should('be.visible')
    cy.get('p>p>p')
    .should('not.exist')



  })

  it('passes', () => {
    cy.visit('https://demoqa.com/elements')
    cy.get('heder > a > img').should('have.attr', 'src', '/images/Toolsqa.jpg')
  })
  
  it('test word input', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get('#userName').type('Boris')
    cy.get('#userEmail').type('testing@ttt.tt')

    cy.get('#submit').click()
  })
  it.only('Clear', () => {
    cy.visit('https://demoqa.com/elements')
    cy.get('#userName')
    .type('Boris')

    cy.wait(3000)
    cy.pause()

    cy.get('#userName').clear()
  })
})