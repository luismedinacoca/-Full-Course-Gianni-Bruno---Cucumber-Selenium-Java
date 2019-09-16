package Step_Definitions;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


import java.util.concurrent.TimeUnit;

public class LoginSteps {

    //Create a WebDriver variable
    WebDriver driver;

    @Before()
    public void setup(){
        System.setProperty("webdriver.chrome.driver","D:\\Programming\\[Cucumber]\\Gianni Bruno - [Full course] Cucumber Selenium Java\\Section20\\Section20_lecture032\\src\\test\\java\\Resources\\Drivers\\chromedriver.exe");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }

    @Given("^user navigate to stackoverflow website$")
    public void user_navigate_to_stackoverflow_website() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        driver.get("https://stackoverflow.com/");
    }

    @And("^User click on login button$")
    public void user_click_on_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        WebElement btn_logIn = driver.findElement(By.xpath("//a[contains(@class, 'login-link')]"));
        btn_logIn.click();
    }

    @And("^User enters a valid username$")
    public void user_enters_a_valid_username() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        Thread.sleep(3000);
        driver.findElement(By.id("email")).sendKeys("autotestudemy@mail.com");
    }

    @And("^User enters a valid password$")
    public void user_enters_a_valid_password() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
       driver.findElement(By.id("password")).sendKeys("Password321!");
    }

    @When("^User clicks on the login button$")
    public void user_clicks_on_the_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        driver.findElement(By.id("submit-button")).click();
    }

    @Then("^User should be taken to the successful login page$")
    public void user_should_be_taken_to_the_successful_login_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        Thread.sleep(3000);
        WebElement askQuestionButton = driver.findElement(By.xpath("//*[text()[contains(.,'Ask Question')]]"));
        if(askQuestionButton.isDisplayed()){
            System.out.println("Assertion is correct");
            askQuestionButton.click();
        } else{
            System.out.println("Missing assertion");
        }
    }
}
