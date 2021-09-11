Feature: DDLoginTest
@regression
  Scenario Outline: Verify login of two users with valid and invalid credentials
    Given User launches chrome browse
    When user opens url "https://admin-demo.nopcommerce.com/admin/"
    And User enters Email as "<email>" and Password as "<password>"
    And click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User click on Log out link
    Then Page Title should be "Your store. Login"
    And close browser

    Examples:
      | email                | password |
      | admin@yourstore.com  | admin    |
      | admin2@yourstore.com |admin2    |