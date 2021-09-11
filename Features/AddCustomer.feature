Feature: Add Customer
  @sanity
  Scenario: Add a new customer
    Given User launches chrome browse
    When user opens url "https://admin-demo.nopcommerce.com/admin/"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And click on Login
    Then user can view dashboard
    When click on Customers Menu
    And click on Customers Menu item
    When click on Add new button
    Then User can see Add new customer page
    When user enters customer info
    And click on save button
    Then user can see confirmation message "The new customer has been added successfully."
    And close browser