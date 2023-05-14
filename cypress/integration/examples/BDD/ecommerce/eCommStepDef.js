import HomePage from '../../../../support/pageObjects/HomePage';
import ProductPage from '../../../../support/pageObjects/ProductPage';
import { Given, When,Then} from "@badeball/cypress-cucumber-preprocessor";

const homePage=new HomePage();
const productPage=new ProductPage();
let name;
let gender;

Given('I open Ecommerce Page',()=>{
    cy.visit(Cypress.env('url')+'/angularpractice/');
    cy.wait(2000);
})

When('I add items to Cart',function(){
    homePage.getShopTab().click();

this.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });
  productPage.getCheckoutButton().click();
})

When('Validate the total prices',()=>{
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
})

Then('Select the country submit and verify thankyou message',()=>{
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
})
When('I fill the form details',function(datatable){
  datatable.hashes().forEach((element) => {
    
    name=element.name;
    gender=element.gender;
    homePage.getNameField().type(name);
    homePage.getGender().select(gender);
    
    })
  }) 
  Then('Validate the forms behaviour',function(){
    homePage.getTwoWayDataBinding().should('have.value',name);
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
    homePage.getEntrepreneur().should('be.disabled');
    //cy.pause();
    Cypress.config('defaultCommandTimeout', 8000);

  })
  
  Then('Select the Shop Page',()=>{
    homePage.getShopTab().click();
  })  

 