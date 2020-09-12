describe('Dashpoard Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080');
    cy.login();
    cy.wait(3000);
  });
  it('changing sorting direction', () => {
    cy.get('[scope=col]>div').each($el => {
      cy.wrap($el).within(button => {
        cy.wrap(button).click();
        cy.get('path')
          .first()
          .should('attr', 'fill', '#4098ff');
        cy.wrap(button).click();
        cy.get('path')
          .last()
          .should('attr', 'fill', '#4098ff');
        cy.wrap(button).click();
        cy.get('path').each($path => cy.wrap($path).should('attr', 'fill', '#cbcbdc'));
      });
    });
  });
  it('filters correctly switches', () => {
    cy.get('[data-cy="filter chip"]').each($el => {
      if (!($el.hasClass('active') || $el.hasClass('disabled'))) {
        cy.wrap($el).click();
        cy.wrap($el).should('have.class', 'active');
      }
    });
  });
});
