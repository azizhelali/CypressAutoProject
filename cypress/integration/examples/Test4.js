//cypress spec
describe('My 4th Test Suite',function(){
it('My First Test Case',function(){
//Check boxes
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('#alertbtn').click();
cy.get('#confirmbtn').click();
//Windows :Alert
cy.on('window:alert',(str) => {
  //Mocha
expect(str).to.equal('Hello , share this practice page and share your knowledge');
})

cy.on('window:confirm',(str) => {
  //Mocha
  expect(str).to.equal('Hello , Are you sure you want to confirm?');
  })
  //child Tab with Jquery
  cy.get('#opentab').invoke('removeAttr','target').click();
  cy.url().should('include', 'rahulshettyacademy');
  cy.go('back');

})

})