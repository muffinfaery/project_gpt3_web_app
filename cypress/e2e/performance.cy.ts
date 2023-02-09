describe('Intersection Observer Review', () => {
    it('Footer', () => {
      cy.visit('http://localhost:3000/')
      cy.scrollTo('bottom', { easing: 'linear' })

      cy.contains('Request Early Access')
      .should('be.visible');
    })

    it('Callout Features', () => {
        cy.visit('http://localhost:3000/about')
        cy.scrollTo('bottom', { easing: 'linear' })
  
        cy.get('[data-cy="callout"]')
        .children()
        .contains('Become the tended active')
        .should('be.visible');
    })
  });
  
  export {}