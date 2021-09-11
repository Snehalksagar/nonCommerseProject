Feature: Login
  @sanity
  Scenario: Successful login with valid credentials
    Given User launches chrome browse
    When user opens url "https://admin-demo.nopcommerce.com/admin/"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User click on Log out link
    Then Page Title should be "Your store. Login"
    And close browser