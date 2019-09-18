package Step_Definitions;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import java.util.concurrent.TimeUnit;

public class ContactUsSteps {

    //create a webdriver object
    private WebDriver driver;



    //String url = "http://webdriveruniversity.com/";
    // <Begin>************************************** Hook **************************************
    @Before
    public void setup(){
        //private Page_Objects.Webdriveruniversity_page wd_university = new Page_Objects.Webdriveruniversity_page(driver);

        System.setProperty("webdriver.chrome.driver","D:\\Programming\\[Cucumber]\\Gianni Bruno - [Full course] Cucumber Selenium Java\\Section27\\Section27_lecture045\\src\\test\\java\\Others\\chromedriver.exe");
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
        Thread.sleep(3000); //holding the page 3 seconds before it's tearing down
        driver.get(url);
    }

    @When("^I click on the contact us button$")
    public void i_click_on_the_contact_us_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        Thread.sleep(5000); //holding the page 3 seconds before it's tearing down
        System.out.println("i_click_on_the_contact_us_button");
    }

    @And("^I enter a valid first name$")
    public void i_enter_a_valid_first_name() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("i_enter_a_valid_first_name method");
        System.out.println();
    }

    @And("^I enter a valid last name$")
    public void i_enter_a_valid_last_name() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("i_enter_a_valid_last_name method");
        System.out.println();
    }

    @And("^I enter a valid email address$")
    public void i_enter_a_valid_email_address() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("i_enter_a_valid_email_address method");
        System.out.println();
    }

    @And("^I enter comments$")
    public void i_enter_comments() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("i_enter_a_valid_email_address method");
        System.out.println();
    }

    @And("^I click on the submit button$")
    public void i_click_on_the_submit_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("i_click_on_the_submit_button method");
        System.out.println();
    }

    @Then("^the information should successfully be submitted via the contact us form$")
    public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("the_information_should_successfully_be_submitted_via_the_contact_us_form method");
        System.out.println();
    }

    @When("^I enter a non valid first name$")
    public void i_enter_a_non_valid_first_name() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("i_enter_a_non_valid_first_name method");
        System.out.println();
    }

    @And("^I enter a non valid last name$")
    public void i_enter_a_non_valid_last_name() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("i_enter_a_non_valid_last_name method");
        System.out.println();
    }

    @And("^I enter a non valid email address$")
    public void i_enter_a_non_valid_email_address() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("i_enter_a_non_valid_email_address method");
        System.out.println();
    }

    @And("^I enter no comments$")
    public void i_enter_no_comments() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("i_enter_no_comments method");
        System.out.println();
    }

    @Then("^the information should not successfully be submitted via the contact us form$")
    public void the_information_should_not_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("the_information_should_not_successfully_be_submitted_via_the_contact_us_form method");
        System.out.println();
    }

    @Then("^the user should also be notified of the problem\\.$")
    public void the_user_should_also_be_notified_of_the_problem() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("the_user_should_also_be_notified_of_the_problem method");
        System.out.println();
    }
}