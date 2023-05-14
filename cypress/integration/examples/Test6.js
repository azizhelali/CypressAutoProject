//cypress spec
describe('My 6st Test Suite',function(){
it('My First Test Case',function(){
//Handling Mouse Hover Popups
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

cy.get('.mouse-hover-content').invoke('show');
cy.contains('Top').click({force: true});
cy.url().should('include','top');
})

})