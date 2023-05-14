Feature: End to end Ecommerce validation

    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    When Validate the total prices 
    Then Select the country submit and verify thankyou message 

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details 
    |name|gender|
    |Aziz|Male  |
    Then Validate the forms behaviour 
    Then Select the Shop Page



