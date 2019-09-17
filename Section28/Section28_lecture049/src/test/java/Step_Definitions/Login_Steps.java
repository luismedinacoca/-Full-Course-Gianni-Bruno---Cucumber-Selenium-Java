package Step_Definitions;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Login_Steps {

    //create a webdriver object
    WebDriver driver;

    // <Begin>************************************** Hook **************************************
    @Before
    public void setup(){
        System.setProperty("webdriver.chrome.driver","D:\\Programming\\[Cucumber]\\Gianni Bruno - [Full course] Cucumber Selenium Java\\Section27\\Section27_lecture045\\src\\test\\java\\Resources\\Drivers\\chromedriver.exe");
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


    @Given("^I access webdriveruniversity\\.com$")
    public void i_access_webdriveruniversity_com() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @When("^I click on the login portal button$")
    public void i_click_on_the_login_portal_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^I enter a username$")
    public void i_enter_a_username() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^I enter a \"([^\"]*)\" password$")
    public void i_enter_a_password(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^I click on the login button$")
    public void i_click_on_the_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    @Then("^I should be presented with a successful validation alert$")
    public void i_should_be_presented_with_a_successful_validation_alert() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^I enter an \"([^\"]*)\" password$")
    public void i_enter_an_password(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    @Then("^I should be presented with an unsuccessful validation alert$")
    public void i_should_be_presented_with_an_unsuccessful_validation_alert() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}