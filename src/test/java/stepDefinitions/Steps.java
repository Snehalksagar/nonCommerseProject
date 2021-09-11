package stepDefinitions;


import cucumber.api.java.Before;
import cucumber.api.java.bs.A;
import cucumber.api.java.en.*;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustPage;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Steps extends BaseClass{
    @Before
    public void Setup() throws IOException {
        prop= new Properties();
        FileInputStream fis= new FileInputStream("config.properties");
        prop.load(fis);
        logger= Logger.getLogger("nonvommerceProject");//added logger
        PropertyConfigurator.configure("log4j.properties");//Added logger

             String br= prop.getProperty("browser");
             if(br.equals("chrome")){
                 System.setProperty("webdriver.chrome.driver", prop.getProperty("chromeDriverPath"));
                 logger.info("**********Launching chrome browser********");
                 driver = new ChromeDriver();
             }
             else if(br.equals("firefox")){
                 System.setProperty("webdriver.gecko.driver", prop.getProperty("firefoxDriverPath"));
                 logger.info("**********Launching Firefox browser********");
                 driver = new FirefoxDriver();
             }
             else if(br.equals("ie")){
                 System.setProperty("webdriver.ie.driver", prop.getProperty("ieDriverPath"));
                 logger.info("**********Launching IE browser********");
                 driver = new InternetExplorerDriver();
             }
        // System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\Drivers\\chromedriver92.exe");

    }

    @Given("^User launches chrome browse$")
    public void user_launches_chrome_browse() throws Throwable {
        lp = new LoginPage(driver);

    }

    @When("^user opens url \"([^\"]*)\"$")
    public void user_openes_url(String url)throws Throwable {
        logger.info("**********Launching URL********");
    driver.get(url);
    Thread.sleep(3000);
    driver.manage().window().maximize();
    }

    @When("^User enters Email as \"(.*)\" and Password as \"(.*)\"$")
    public void user_enters_email_as_and_password_as(String userName, String passWord) throws Throwable{
        lp=new LoginPage(driver);
        logger.info("**********Entered Username********");
        lp.setUsername(userName);
        logger.info("**********Entered Password ********");
        lp.setPassword(passWord);

    }

    @When("^click on Login$")
   public void click_on_login() throws Throwable{
        lp.clickLoginBtn();
        Thread.sleep(3000);
    }

    @Then("^Page Title should be \"([^\"]*)\"$")
    public void page_title_should_be(String title)throws Throwable {
        if(driver.getPageSource().contains("Login was unsuccessful"))
        {
            driver.close();
            Assert.assertTrue(false);
        }
        else
        {
            Assert.assertEquals(driver.getTitle(), title);

        }

    }
        @When("^User click on Log out link$")
        public void user_click_on_log_out_link()throws Throwable {
        lp.clickLogoutBtn();
        }

        @Then("^close browser$")
        public void close_browser()throws Throwable {
            logger.info("********** Closing browser ********");
        driver.quit();

        }

        //Customer Features Step definitions
        @Then("user can view dashboard")
        public void user_can_view_dashboard() {
            addCust= new AddCustomerPage(driver);
            Assert.assertEquals("Dashboard / nopCommerce administration",addCust.getPageTitle());
        }

            @When("click on Customers Menu")
            public void click_on_Customers_Menu() throws InterruptedException {
            Thread.sleep(1000);
                addCust= new AddCustomerPage(driver);
                addCust.clickOnCustomerMenu();
            }

            @When("click on Customers Menu item")
            public void click_on_Customers_Menu_item() throws InterruptedException {
                Thread.sleep(3000);
            addCust.clickOnCustomerMenuItem();
            }

            @When("click on Add new button")
            public void click_on_Add_new_button() throws InterruptedException {
            addCust.clickOnAddNewBtn();
                Thread.sleep(2000);
            }

            @Then("User can see Add new customer page")
            public void user_can_see_Add_new_customer_page() {
                Assert.assertEquals("Add a new customer / nopCommerce administration",addCust.getPageTitle());
            }

            @When("user enters customer info")
            public void user_enters_customer_info() throws InterruptedException {
            String email= randomString()+"@gmail.com";
            addCust.setEmailid(email);
            addCust.setPswd("test234");
            addCust.enterFirstName("Pratik");
            addCust.enterLastName("Naralale");
            addCust.selectGender("Female");
                addCust.enterDOB("01/01/2000");
                addCust.enterCompanyName("KINCompany");
                addCust.selectIsTaxExtempt();
                addCust.setCustomerRoles("Guests");
            }

            @When("click on save button")
            public void click_on_save_button() {
                addCust.clickSaveBtn();
            }



    @Then("user can see confirmation message {string}")
    public void userCanSeeConfirmationMessage(String msg) {
        Assert.assertTrue( driver.findElement(By.tagName("body")).getText().contains(msg));
    }
    //For Customer Search
    @When("Enter customer email")
    public void enter_customer_email() throws InterruptedException {
        searchCust= new SearchCustPage(driver);
        Thread.sleep(4000);
        searchCust.enterEmailForSearch("james_pan@nopCommerce.com");
    }

    @When("click on Search button")
    public void click_on_Search_button() throws InterruptedException {
        searchCust.clickSearchBtn();
        Thread.sleep(4000);
    }

    @Then("user should found customer email in search table")
    public void user_should_found_customer_email_in_search_table() {
       boolean status= searchCust.searchCustByEmail("james_pan@nopCommerce.com");
       Assert.assertEquals(true,status);
    }

    @Then("close the browser")
    public void close_the_browser() {
    driver.quit();
    }



    //For searching customer by first name and last name
    @When("Enter customer first name and last name")
    public void enter_customer_first_name_and_last_name() {
        searchCust= new SearchCustPage(driver);
        searchCust.enterFNForSearch("James");
        //searchCust.enterLNForSearch("Pan");

    }

    @Then("user should found customer name in search table")
    public void user_should_found_customer_name_in_search_table() {
        boolean status= searchCust.searchCustName("James");
        Assert.assertEquals(true,status);

    }

}
