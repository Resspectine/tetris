describe('Deep linking Page', () => {
  it('redirects to correct page', () => {
    cy.visit('http://localhost:8080/intramed/list');
    cy.login();
    cy.wait(5000);
    cy.location().should(location => {
      expect(location.pathname).to.eq('/intramed/list');
    });
  });
});
