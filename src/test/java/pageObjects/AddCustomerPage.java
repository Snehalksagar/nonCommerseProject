package pageObjects;

import cucumber.api.java.eo.Do;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomerPage {
    WebDriver ldriver;
    public AddCustomerPage(WebDriver rdriver){
        ldriver = rdriver;
        PageFactory.initElements(rdriver, this);
    }

   // By customersMenu= By.xpath("//a[contains(@class,'nav-link')]//*[text()=' Customers']");
    By customersMenu=By.xpath("//a[@href='#']//p[contains(text(),'Customers')]");
    By customerMenuItem=By.xpath("//a[contains(@href,'Customer')]//*[text()=' Customers']");
    By addNewBtn =By.xpath("//a[contains(@class,'btn-primary')]");
    By email=By.xpath("//input[@id='Email']");
    By password=By.xpath("//input[@id='Password']");
    By firstName=By.xpath("//input[@id='FirstName']");
    By lastName=By.xpath("//input[@id='LastName']");
    By genderF=By.xpath("//input[@id='Gender_Female']");
    By genderM=By.xpath("//input[@id='Gender_Male']");
    By dateOfBirth=By.xpath("//input[@id='DateOfBirth']");
    By companyName=By.xpath("//input[@id='Company']");
    By isTaxExtempt=By.xpath("//input[@id='IsTaxExempt']");
    By newsLetter =By.xpath("//input[@aria-describedby=\"SelectedNewsletterSubscriptionStoreIds_taglist\"]");
    By custRoleDD = By.xpath(" ");
    By customerRoles=By.xpath("//select[@id='SelectedCustomerRoleIds']/option");
    By managerOfVendors=By.xpath("//input[@name='Email']");
    By activeChk=By.xpath("//input[@id='Active']");
    By adminComments=By.xpath("//textarea[@id=\"AdminComment\"]");

    By txtcustomerRoles=By.xpath("//div[@class='k-multiselect-wrap k-floatwrap']");

    By lstitemAdministrators=By.xpath("//li[contains(text(),'Administrators')]");
    By lstitemRegistered=By.xpath("//li[contains(text(),'Registered')]");
    By lstitemGuests=By.xpath("//li[contains(text(),'Guests')]");
    By lstitemVendors=By.xpath("//li[contains(text(),'Vendors')]");


    By drpmgrOfVendor=By.xpath("//*[@id='VendorId']");
    By saveBtn=By.xpath("//button[@name='save']");

    //ACtion methods
    public String getPageTitle(){
        return ldriver.getTitle();
    }

    public void clickOnCustomerMenu() throws InterruptedException {
        Thread.sleep(2000);
        ldriver.findElement(customersMenu).click();
    }
    public void clickOnCustomerMenuItem() throws InterruptedException {
        Thread.sleep(2000);
        ldriver.findElement(customerMenuItem).click();
    }
    public void clickOnAddNewBtn() {
        ldriver.findElement(addNewBtn).click();
    }
    public void setEmailid(String id){
        ldriver.findElement(email).sendKeys(id);
    }
    public void setPswd(String pswd){
        ldriver.findElement(password).sendKeys(pswd);
    }
    public void enterFirstName(String fname){
        ldriver.findElement(firstName).sendKeys(fname);
    }
    public void enterLastName(String lname){
        ldriver.findElement(lastName).sendKeys(lname);
    }
    public void selectGender(String gender){
        if(gender.equalsIgnoreCase("Male")){
            ldriver.findElement(genderM).click();
        }if (gender.equalsIgnoreCase("Female")){
            ldriver.findElement(genderF).click();
        }
    }

    public void enterDOB(String dob){
        ldriver.findElement(dateOfBirth).sendKeys(dob);
    }

    public void enterCompanyName(String compName){
        ldriver.findElement(companyName).sendKeys(compName);
    }
    public void selectIsTaxExtempt(){
        ldriver.findElement(isTaxExtempt).click();
    }

    public void enterNewsLetter(String newsltr){
        ldriver.findElement(newsLetter).sendKeys(newsltr);
    }

    public void clickCustomerRoleDropdown(){
        ldriver.findElement(custRoleDD).click();


    }
        public void setCustomerRoles(String role) throws InterruptedException
        {
            if(!role.equals("Vendors")) //If role is vendors should not delete Register as per req.
            {
                ldriver.findElement(By.xpath("//*[@id=\"SelectedCustomerRoleIds_taglist\"]/li/span[2]")).click();
            }

            ldriver.findElement(txtcustomerRoles).click();

            WebElement listitem;

            Thread.sleep(3000);

            if(role.equals("Administrators"))
            {
                listitem=ldriver.findElement(lstitemAdministrators);
            }
            else if(role.equals("Guests"))
            {
                listitem=ldriver.findElement(lstitemGuests);
            }
            else if(role.equals("Registered"))
            {
                listitem=ldriver.findElement(lstitemRegistered);
            }
            else if(role.equals("Vendors"))
            {
                listitem=ldriver.findElement(lstitemVendors);
            }
            else
            {
                listitem=ldriver.findElement(lstitemGuests);
            }

            //listitem.click();
            //Thread.sleep(3000);

            JavascriptExecutor js = (JavascriptExecutor)ldriver;
            js.executeScript("arguments[0].click();", listitem);

        }
    public void clickSaveBtn(){
        ldriver.findElement(saveBtn).click();
    }




}