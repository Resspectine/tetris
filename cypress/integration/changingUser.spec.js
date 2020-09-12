import config from '../../testsConfig.json';

describe('Dashpoard Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080');
    cy.login();
    cy.wait(3000);
  });
  it('successfully logging out', () => {
    cy.get('[data-cy="user menu popover"]').click();
    cy.get('[data-cy="welcome message"]')
      .invoke('text')
      .should('match', new RegExp(config.Username));
    cy.get('[role=menuitem]')
      .last()
      .click();
  });
  it('logging in another user', () => {
    cy.loginSecond();
    cy.wait(3000);
    cy.get('[data-cy="welcome message"]')
      .invoke('text')
      .should('match', new RegExp(config.UsernameSecond));
  });
});
