import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Webdriveruniversity_page(){

    //Create a driver
    WebDriver driver;

    //each WebElements:
    @FindBy(name="contact-us")
    WebElement btn_contactUs;


    public Webdriveruniversity_page(WebDriver driver){
        this.driver = driver;

        //This initElements method will create all webElements
        PageFactory.initElements(driver, this);
    }

    //
    public void click_btn_ContactUs(){
        btn_contactUs.click();
    }
}