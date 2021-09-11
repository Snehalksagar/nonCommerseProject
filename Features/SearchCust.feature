Feature: Search Cust by Email
Background:
  Given User launches chrome browse
  When user opens url "https://admin-demo.nopcommerce.com/admin/"
  And User enters Email as "admin@yourstore.com" and Password as "admin"
  And click on Login
  Then Page Title should be "Dashboard / nopCommerce administration"

@regression
  Scenario: Search customer by using Email id
    When click on Customers Menu
    And click on Customers Menu item
    And Enter customer email
    And click on Search button
    Then user should found customer email in search table
    And close the browser

  @regression
  Scenario: Search customer by Firstname and lastname
    When click on Customers Menu
    And click on Customers Menu item
    And Enter customer first name and last name
    And click on Search button
    Then user should found customer name in search table
    And close the browser