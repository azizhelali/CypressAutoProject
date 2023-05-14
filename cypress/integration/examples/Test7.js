//cypress spec
describe('My 7th Test Suite', function() {
    it('My 7th Test Case', function() {
      // Child Window
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('#openwindow').then(function($el) {
        const url = $el.prop('href');
        if (!url) {
          cy.log('No href attribute found for #openwindow element');
          return;
        }
        cy.log(url);
        cy.visit(url);
      });
    });
  });