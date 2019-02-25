describe('Main test', () => {
  it('Should has right title', () => {
    cy.visit('/');
    cy.contains('h1', 'Right UI Style Guide');
  });
});
