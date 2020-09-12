describe('Dashpoard Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080');
    cy.login();
    cy.wait(3000);
  });
  it('correctly loads patients list page', () => {
    cy.contains('Patients').click();
  });
  it('patients list behavior correct', () => {
    cy.contains('Show All Patients');
    cy.get('[placeholder="Search patient by name"]').type('Olya');
    cy.get('[aria-label=table]');
    cy.get('[placeholder="Search patient by name"]').clear();
    cy.contains('Show All Patients').click();
    cy.get('[aria-label=table]');
    cy.contains('Hide All Patients').click();
    cy.get('.MuiCollapse-hidden');
    cy.contains('Show All Patients');
  });
  it('amount of patinets not changing', () => {
    cy.get('[data-cy="patients count"]')
      .invoke('text')
      .then(amount => {
        cy.get('[placeholder="Search patient by name"]').type('Absolutely random text fekmlskef');
        cy.get('[data-cy="patients count"]')
          .invoke('text')
          .should('eq', amount);
      });
  });
  it('correctly redirects to patiant page', () => {
    cy.get('[placeholder="Search patient by name"]').clear();
    cy.contains('Show All Patients').click();
    cy.get('[data-cy="table row"]')
      .first()
      .click();
    cy.location().should(location => expect(location.pathname).to.match(/patients/));
  });
});
