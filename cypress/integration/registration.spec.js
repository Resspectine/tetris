describe('Registration Page', () => {
  it('patient registration', () => {
    cy.visit('http://localhost:8080/registration/osr');
  });
  it('email validation', () => {
    cy.get('[name=email]')
      .type('awdawd')
      .blur();
    cy.contains('Email is required');
    cy.get('[name=email]')
      .clear()
      .type('awdawd@awd.awd')
      .blur();
  });
  it('phone validation', () => {
    cy.get('[name=phoneNumber]')
      .type('123adk')
      .blur();
    cy.contains('Phone number is invalid');
    cy.get('[name=phoneNumber]')
      .clear()
      .type('+213123879812')
      .blur();
  });
  it('passphrase', () => {
    cy.get('[name=passphrase]')
      .type('awd123')
      .blur();
    cy.contains('Passphrase is too short (minimum is 16 characters)');
    cy.get('[name=passphrase]')
      .clear()
      .type('Test1234Test1234')
      .blur();
  });
  it('confirm passphrase', () => {
    cy.get('[name=confirmPassphrase]')
      .type('wqd21423')
      .blur();
    cy.contains('Confirm passphrase is not equal to passphrase');
    cy.get('[name=confirmPassphrase]')
      .clear()
      .type('Test1234Test1234')
      .blur();
  });
  it('name', () => {
    cy.get('[name=name]')
      .focus()
      .blur();
    cy.contains('Name is required');
    cy.get('[name=name]')
      .clear()
      .type('Test')
      .blur();
  });
  it('surname', () => {
    cy.get('[name=surname]')
      .focus()
      .blur();
    cy.contains('Surname is required');
    cy.get('[name=surname]')
      .clear()
      .type('Surname')
      .blur();
  });
  it('date of birth', () => {
    cy.get('[name=dateOfBirth]')
      .type('999586743139457603199')
      .blur();
    cy.contains('Date of birth has wrong format (ex. dd/mm/yyyy)');
    cy.get('[name=dateOfBirth]')
      .clear()
      .type('9995867431394576031998')
      .blur();
    cy.get('[name=dateOfBirth]')
      .invoke('val')
      .should(value => expect(value).to.equal('31/03/1998'));
  });
  it('place of living', () => {
    cy.get('[name=placeOfBirth]').type('Minsk');
    cy.wait(1000);
    cy.get('[role=menuitem]')
      .first()
      .click();
  });
  it('residence address', () => {
    cy.get('[name=residenceAddress]').type('Milano');
    cy.wait(1000);
    cy.get('[role=menuitem]')
      .first()
      .click();
  });
  it('fiscal code', () => {
    cy.get('[name=fiscalCode]')
      .invoke('val')
      .should(value => expect(value).to.equal('SRNTST98C31Z139D'));
  });
  it('check checkboxes', () => {
    cy.get('[name=rulesOfUse]').click();
    cy.get('[name=contacts]').click();
    cy.get('[name=privacy]').click();
  });
});
