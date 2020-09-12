const validPaths = ['/login/osr'];

describe('Deep linking Page', () => {
  it('redirects to correct page', () => {
    validPaths.forEach(path => {
      cy.visit(`http://localhost:8080${path}`);
      cy.get('[data-cy="additional info"]');
    });
  });
});
