describe('Login Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080');
  });

  it('shows validation error on empty login field', () => {
    cy.get('input')
      .first()
      .focus()
      .blur();

    cy.get('[data-cy="validation error"]');
  });

  it('email valid', () => {
    cy.get('input')
      .first()
      .type('test@email.com');
  });

  it('toggle password visibility', () => {
    cy.get('input')
      .last()
      .type('Test1234')
      .should('have.attr', 'type', 'password');

    cy.get('[aria-label="toggle password visibility"]')
      .first()
      .click();

    cy.get('input')
      .last()
      .should('have.attr', 'type', 'text');
  });

  it('logging in correctly', () => {
    cy.login();
    cy.wait(5000);
    cy.location().should(location => {
      expect(location.pathname).to.eq('/dashboard');
    });
  });
});
