describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.get('h2').should('contain', 'Welcome to Angular App');
  });

  it('should have correct title', () => {
    cy.title().should('eq', 'My app');
  });

  it('should have navigation header', () => {
    cy.get('header').should('exist');
    cy.get('nav a').should('have.text', 'Home');
  });

  it('should have proper styling', () => {
    cy.get('.home').should('have.css', 'max-width', '800px');
    cy.get('.header').should('have.css', 'background-color', 'rgb(248, 249, 250)');
  });
});