//cypress spec
describe('My Second Test Suite',function(){
it('My First Test Case',function(){
//Steps
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    const vegValue = $el.find('h4.product-name').text();
    if (vegValue.includes('Carrot')) {
        cy.wrap($el).find('button').click();
    }
});
cy.get('.cart-icon > img').click();
cy.contains('PROCEED TO CHECKOUT').click();
cy.contains('Place Order').click();
})

})