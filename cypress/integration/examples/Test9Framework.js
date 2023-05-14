import 'cypress-iframe'
import HomePage from '../pageObjects/HomePage';
import ProductPage from '../pageObjects/ProductPage';

//cypress spec
describe('My 9tn Test Suite',function(){
    before(function(){
cy.fixture('example').then(function(data){
    this.data=data;
})
      })

it('My First Test Case',function(){

const homePage=new HomePage();
const productPage=new ProductPage();

cy.visit(Cypress.env('url')+'/angularpractice/');

homePage.getNameField().type(this.data.name);
homePage.getGender().select(this.data.gender);

homePage.getTwoWayDataBinding().should('have.value',this.data.name);
cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
homePage.getEntrepreneur().should('be.disabled');
//cy.pause();
Cypress.config('defaultCommandTimeout', 8000);
homePage.getShopTab().click();

this.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });
  productPage.getCheckoutButton().click();

  //Sum of products price
  var sum=0;
  let totalPrice;
  cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
    const actualText=$el.text();
    var result=actualText.split(' ');
    result=result[1].trim();
    sum=Number(sum)+Number(result);
    }).then(function(){
      cy.log(sum);
    })
    //Check that sum of products price equal to total price
    cy.get('h3 strong').then(function(element){
      const amount=element.text();
      var res=amount.split(' ');
      totalPrice=res[1].trim();
      expect(Number(totalPrice)).to.equal(sum);
    })
  
  cy.get('.btn.btn-success').click();
  cy.get('#country').type('India');
  cy.get('.suggestions > ul > li > a').click();
  cy.get('#checkbox2').click({force: true});
  cy.get('input[type="submit"]').click();
  //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).'.trim());
  cy.get('.alert').then(function(element){
    const actualText=element.text();
    expect(actualText.includes('Success')).to.be.true;
  })
});
});

