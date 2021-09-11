package pageObjects;

import Utilities.WaitHelper;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SearchCustPage {
    WebDriver ldriver;
    WaitHelper waithelper;
    public SearchCustPage(WebDriver rdriver){
        PageFactory.initElements(rdriver, this);
        waithelper = new WaitHelper(rdriver);
    }

    @FindBy (how= How.XPATH, using ="//input[@name='SearchEmail']")
    WebElement searchByEmail;

    @FindBy (how= How.XPATH, using ="//button[@id='search-customers'] ")
    WebElement searchBtn;

    @FindBy(how=How.XPATH, using ="//input[@id='SearchFirstName']")
    WebElement searchFirstName;
    @FindBy(how=How.XPATH, using ="//input[@id='SearchLastName']")
    WebElement searchLastName;

    @FindBy(how=How.XPATH, using ="//table[@id='customers-grid']")
    WebElement table;
    @FindBy(how=How.XPATH, using ="//table[@id='customers-grid']//tbody/tr")
    List<WebElement> noOfRows;

    @FindBy(how=How.XPATH, using ="//table[@id='customers-grid']//tbody/tr/td")
    List<WebElement> noOfCols;

    public void enterEmailForSearch(String email){
        waithelper.waitForElement(searchByEmail, 3000);
        searchByEmail.sendKeys(email);
    }

    public void clickSearchBtn(){
        searchBtn.click();
    }

    public int getNoOfRows(){
       return (noOfRows.size());
    }
    public int getNoOfCols(){
       return  ( noOfCols.size());
    }

    public boolean searchCustByEmail(String email) {
        boolean flag = false;
        for (int i = 1; i <= getNoOfRows(); i++) {
            String custEmail = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[2]")).getText();
            System.out.println(custEmail);

            System.out.println(email);
            if (custEmail.equalsIgnoreCase(email)) {
                flag = true;
            }

        }
        return flag;

    }


    public void enterFNForSearch(String firstname){
        waithelper.waitForElement(searchFirstName, 3000);
        searchFirstName.sendKeys(firstname);
    }

    public void enterLNForSearch(String lastname){
        waithelper.waitForElement(searchLastName, 3000);
        searchLastName.sendKeys(lastname);
    }

    //searchCustName
    public boolean searchCustName(String name){
        boolean flag=false;
        for (int i=1;i<=getNoOfRows();i++) {
            String flname = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[3]")).getText();
            System.out.println("Name from Table: -" + flname);
            System.out.println("Actual name given in search :- "+name);
            //String names[] = flname.split("");
           // if (names[0].equals("James") && names[1].equals("Pal")) {
            if(flname.contains(name))
                flag = true;
               // System.out.println("firstname"+ names[0]);
              //  System.out.println("lastname"+ names[1]);

       }
        return flag;
    }
}

