//cypress spec
describe('My 5th Test Suite',function(){
it('My First Test Case',function(){
//WEB Table
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

if($el.text().includes('Python')){
  cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
    const priceText=price.text();
    expect(priceText).to.equal('25');
  }) 
}

})
})

})