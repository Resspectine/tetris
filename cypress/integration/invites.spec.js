describe('Invites Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080');
    cy.login();
    cy.wait(3000);
    cy.contains('Invites').click();
    cy.location().should(location => expect(location.pathname).to.match(/inviteList/));
  });
});
