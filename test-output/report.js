$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/AddCustomer.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a new customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches chrome browse",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens url \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_openes_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_Customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Customers Menu item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Customers_Menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Add new button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_Add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Add new customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_see_Add_new_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters customer info",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_enters_customer_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.userCanSeeConfirmationMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/DDLoginTest.feature");
formatter.feature({
  "name": "DDLoginTest",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify login of two users with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User launches chrome browse",
  "keyword": "Given "
});
formatter.step({
  "name": "user opens url \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin2@yourstore.com",
        "admin2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify login of two users with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches chrome browse",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens url \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_openes_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_click_on_log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify login of two users with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches chrome browse",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens url \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_openes_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin2@yourstore.com\" and Password as \"admin2\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.Steps.page_title_should_be(Steps.java:87)\r\n\tat ✽.Page Title should be \"Dashboard / nopCommerce administration\"(file:Features/DDLoginTest.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_click_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches chrome browse",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens url \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_openes_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_click_on_log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/SearchCust.feature");
formatter.feature({
  "name": "Search Cust by Email",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches chrome browse",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens url \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_openes_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search customer by using Email id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "click on Customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_Customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Customers Menu item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Customers_Menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter customer email",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should found customer email in search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_found_customer_email_in_search_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches chrome browse",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_launches_chrome_browse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens url \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_openes_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search customer by Firstname and lastname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "click on Customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_Customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Customers Menu item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Customers_Menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter customer first name and last name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_first_name_and_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should found customer name in search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_found_customer_name_in_search_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});