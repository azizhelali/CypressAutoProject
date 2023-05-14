//cypress spec
describe('My Third Test Suite',function(){
it('My First Test Case',function(){
//Check boxes
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
cy.get('input[type="checkbox"]').check(['option2','option3'])

//Static Dropdown
cy.get('select').select('option2').should('have.value','option2');

//Dynamic Dropdown
cy.get('#autocomplete').type('Ind');
cy.wait(2000); // wait for the dropdown options to load
cy.get('.ui-menu-item div').each(($el, index, $list) => {
  if ($el.text() === 'India') {
    cy.wrap($el).click();
}
})
//autocomplete
cy.get('#autocomplete').should('have.value','India');
//Visible invisible
cy.wait(2000)
cy.get('#displayed-text').should('be.visible');
cy.get('#hide-textbox').click();
cy.get('#displayed-text').should('not.be.visible');
cy.get('#show-textbox').click();
cy.get('#displayed-text').should('be.visible');

//Radio button
cy.get('input[value="radio2"]').check().should('be.checked');

})

})