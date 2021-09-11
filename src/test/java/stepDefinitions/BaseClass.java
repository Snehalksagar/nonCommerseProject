package stepDefinitions;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustPage;

import java.util.Properties;

public class BaseClass {
    public WebDriver driver;
    LoginPage lp;
    AddCustomerPage addCust;
    SearchCustPage searchCust;
   public static Logger logger;
   Properties prop;
//to generate unique random no for Email
    public static String randomString(){
       String ranStr= RandomStringUtils.randomAlphabetic(5);
        return ranStr;
    }

}
