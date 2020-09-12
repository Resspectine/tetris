import config from '../../testsConfig.json';

Cypress.Commands.add('login', () => {
  cy.get('input')
    .first()
    .clear()
    .type(config.TestEmail);
  cy.get('input')
    .last()
    .clear()
    .type(config.TestPassword);
  cy.get('[type=submit]').click();
});

Cypress.Commands.add('loginSecond', () => {
  cy.get('input')
    .first()
    .clear()
    .type(config.TestEmailSecond);
  cy.get('input')
    .last()
    .clear()
    .type(config.TestPasswordSecond);
  cy.get('[type=submit]').click();
});
