//cypress spec
describe('My First Test Suite',function(){
it('My First Test Case',function(){
//Steps
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.products').as('productLocator')
cy.get('.product:visible').should('have.length',4)
cy.get('@productLocator').find('.product').should('have.length',4)
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
    console.log('Hello');
})


cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    const vegValue = $el.find('h4.product-name').text();
    if (vegValue.includes('Carrot')) {
        cy.wrap($el).find('button').click();
    }
});

//Assertion if logo text is correctly displayed
cy.get('.brand.greenLogo').should('have.text','GREENKART');

//this is to print in logs 
cy.get('.brand.greenLogo').then(function(logoElement){
    cy.log(logoElement.text());
});

})

})