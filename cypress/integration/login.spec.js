describe('Login', function() {
  const correctLogin = 'admin';
  const correctPassword = '12345';
  const wrongLogin = 'wrong admin';
  const wrongPassword = 'sample';

  it('Should throw error for wrong password ', function() {
    cy.visit('http://testing-ground.scraping.pro/login');
    cy.get('#usr').type(correctLogin);
    cy.get('#pwd').type(wrongPassword);
    cy.get('[type="submit"]').click();
    cy.get('#case_login');
    cy.contains('h3','ACCESS DENIED!')
  });

  it('Should throw error for wrong admin ', function() {
    cy.visit('http://testing-ground.scraping.pro/login');
    cy.get('#usr').type(wrongLogin);
    cy.get('#pwd').type(correctPassword);
    cy.get('[type="submit"]').click();
    cy.get('#case_login');
    cy.contains('h3','ACCESS DENIED!')
  });

  it('Should throw error for wrong login ', function() {
    cy.visit('http://testing-ground.scraping.pro/login');
    cy.get('#usr').type(correctLogin);
    cy.get('#pwd').type(correctPassword);
    cy.get('[type="submit"]').click();
    cy.get('#case_login');
    cy.contains('h3','WELCOME :)')
  })
});