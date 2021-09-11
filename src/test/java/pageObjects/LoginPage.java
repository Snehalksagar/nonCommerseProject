package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    WebDriver rdriver;
    public LoginPage(WebDriver ldriver){
        rdriver=ldriver;
        PageFactory.initElements(ldriver, this);

    }

    @FindBy(xpath="//input[contains(@class,'email')]")
    WebElement username;

    @FindBy(xpath="//input[contains(@class,'password')]")
    WebElement password;

    @FindBy(xpath="//button[@type='submit']")
    WebElement loginBtn;

    @FindBy(xpath = "//a[@href='/logout']")
    WebElement logoutBtn;

    public void setUsername(String name){
        username.clear();
        username.sendKeys(name);
    }
    public void setPassword(String pswd){
        password.clear();
        password.sendKeys(pswd);
    }
    public void clickLoginBtn(){
        loginBtn.click();
    }
    public void clickLogoutBtn(){
        logoutBtn.click();
    }
}
