describe('Blog Interactions', () => {
  it('Navigate to Blogs', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-cy="navbar_navbarMenu_icon"]')
      .click();

    cy.get('[data-cy="navbar_navbarMenu"]')
      .should('be.visible');

    cy.get('[data-cy="navbar_navbarMenu"]')
      .contains("Blog")
      .click();

    cy.contains("We are blogging about it.")
      .should('be.visible');
  })

  it('Navigate to A Single Blog', () => {
    cy.visit('http://localhost:3000/blogs')

    cy.contains("We are blogging about it.")
      .should('be.visible');

    cy.get('[data-cy="blogContainer_article"]')
      .children()
      .contains("Read Full Article")
      .click();

    cy.get('[data-cy="blog"]')
      .children()
      .contains("Nulla")
      .should('be.visible');
  })
});

export {}