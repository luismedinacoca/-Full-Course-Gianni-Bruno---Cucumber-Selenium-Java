package Step_Definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Login_Steps {

    //create a webdriver object
    WebDriver driver;

    // <Begin>************************************** Hook **************************************
    @Before
    public void setup(){
        System.setProperty("webdriver.chrome.driver","D:\\Programming\\[Cucumber]\\Gianni Bruno - [Full course] Cucumber Selenium Java\\Section28\\Section28_lecture049\\src\\test\\java\\Resources\\Drivers\\chromedriver.exe");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
        this.driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
    }

    //After hook
    @After
    public void tearDown() throws InterruptedException {
        Thread.sleep(3000); //holding the page 3 seconds before it's tearing down
        this.driver.manage().deleteAllCookies();
        this.driver.quit();
        this.driver = null;
    }

    //  <end> ************************************** Hook **************************************

    @Given("^I access \"([^\"]*)\"$")
    public void iAccess(String url) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();

        driver.get(url);
    }

    @When("^I click on the login portal button$")
    public void i_click_on_the_login_portal_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//a[contains(@id, 'login-portal')]")).click();
    }

    @And("^I enter a username$")
    public void i_enter_a_username() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();

        @SuppressWarnings("unused")
        String winHandleBefore = driver.getWindowHandle();
        //Perform the click operation that opens new window
        //Switch to new window opened
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }

        driver.findElement(By.id("text")).sendKeys("webdriver");
    }

    @And("^I enter a \"([^\"]*)\" password$")
    public void i_enter_a_password(String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();

        driver.findElement(By.id("password")).sendKeys(password);
    }
    @And("^I click on the login button$")
    public void i_click_on_the_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();

        driver.findElement(By.xpath("//*[contains(@id, 'login-button')]")).click();
    }

    @Then("^I should be presented with a successful validation alert$")
    public void i_should_be_presented_with_a_successful_validation_alert() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();

        Alert alert = driver.switchTo().alert();
        System.out.println(alert.getText());
        Assert.assertEquals("validation failed666", alert.getText());
    }

    @Then("^I should be presented with an unsuccessful validation alert$")
    public void i_should_be_presented_with_an_unsuccessful_validation_alert() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();

        Alert alert = driver.switchTo().alert();
        System.out.println(alert.getText());

        //actual expects
        Assert.assertEquals("validation failed", alert.getText());
    }
}