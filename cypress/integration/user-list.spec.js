/// <reference types="cypress" />

context('User list basics', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Check title', () => {
    const title = 'React User List';
    cy.title()
      .should('equal', title)
      .get('.title-text')
      .should('contain', title);
  });

  it('GitHub link is accurate and will open in a new tab', () => {
    cy.get('.title-github')
      .should(
        'have.attr',
        'href',
        'https://github.com/dstanich/simple-user-list'
      )
      .should('have.attr', 'target', '_blank');
  });
});

context('Searches', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Search with count', () => {
    cy.get('#search-count')
      .type('5')
      .get('.search-button')
      .click()
      .get('div.User')
      .should('have.length', 5);
  });

  it('Search with count and seed', () => {
    cy.server();
    cy.route('https://randomuser.me/api/*').as('randomUser');

    const count = 10;
    cy.get('#search-count')
      .type(count)
      .get('#search-seed')
      .type('cypress')
      .get('.search-button')
      .click()
      .get('div.User')
      .should('have.length', count);

    cy.wait('@randomUser')
      .its('url')
      .should('include', `results=${count}&seed=cypress`);
  });
});

context('Users', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.server();
    cy.route('https://randomuser.me/api/*', 'fx:users.json').as('randomUser');

    cy.get('#search-count')
      .type('1')
      .get('.search-button')
      .click()
      .get('div.User')
      .should('have.length', 2);
  });

  it('Sets fields properly', () => {
    cy.get('.user-name')
      .first()
      .should('contain.text', 'Pretend Person')
      .get('.age-container')
      .first()
      .should('contain.text', 'Age: 67')
      .get('.address')
      .first()
      .should('contain.text', '123 Fake St.Rochester, MN 55901USA')
      .get('.phone')
      .first()
      .should('contain.text', '0425-4160790');
  });

  it('Removes user card', () => {
    cy.get('div.User')
      .should('have.length', 2)
      .get('.delete-button')
      .first()
      .click()
      .get('div.User')
      .should('have.length', 1);
  });
});
