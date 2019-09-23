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
    private WebDriver driver;

    // <Begin>************************************** Hook **************************************
    @Before
    public void setup(){
        System.out.println(System.getProperty("user.dir"));
        System.setProperty("webdriver.chrome.driver", "D:\\Programming\\[Cucumber]\\Gianni Bruno - [Full course] Cucumber Selenium Java\\Section29\\Section29_lecture053_lastName_DataTable\\src\\test\\java\\Others\\chromedriver.exe");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }

    //After hook
    @After
    public void tearDown() throws InterruptedException {
        Thread.sleep(3000); //holding the page 3 seconds before it's tearing down
        this.driver.manage().deleteAllCookies();
        this.driver.close();
        this.driver.quit();
        this.driver = null;
    }

    //  <end> ************************************** Hook **************************************


    @Given("^User navigates to \"([^\"]*)\"$")
    public void user_navigates_to(String url) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        driver.get(url);

        System.out.println(">>>>>>>> user_navigates_to***** method =>>> " + url);
    }

    @When("^user clicks on the login portal button$")
    public void user_clicks_on_the_login_portal_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        Thread.sleep(3000); //holding the page 3 seconds before it's tearing down
        driver.findElement(By.xpath("//a[contains(@id,'login-portal')]")).click();

        System.out.println("***** user_clicks_on_the_login_portal_button ***** method");
    }

    @And("^user  enters the \"([^\"]*)\" username$")
    public void user_enters_the_username(String usr) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();

        Thread.sleep(3000); //holding the page 3 seconds before it's tearing down

        @SuppressWarnings("unused")
        String winHandleBefore = driver.getWindowHandle();
        //Perform the click operation that opens new window
        //Switch to new window opened
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }
        driver.findElement(By.xpath("//input[contains(@id, 'text')]")).sendKeys(usr);

        System.out.println(">>>>> user_enters_the_username ***** method =>>> " + usr);
    }

    @And("^user enters the \"([^\"]*)\" password$")
    public void user_enters_the_password(String pwd) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        driver.findElement(By.xpath("//input[contains(@id, 'password')]")).sendKeys(pwd);

        System.out.println(">>>>> user_enters_the_password ***** method =>>> " + pwd);
    }

    @And("^user clicks on the login button$")
    public void user_clicks_on_the_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        driver.findElement(By.xpath("//button[contains(@id, 'login-button')]")).click();

        System.out.println("***** user_clicks_on_the_login_button ***** method");
    }

    @Then("^the user should be presented with the following prompt alert \"([^\"]*)\"$")
    public void the_user_should_be_presented_with_the_following_prompt_alert(String message) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();

        // *********************** IMPORTANT ***********************
        Alert alert = driver.switchTo().alert();
        System.out.println(alert.getText());

        //actual expects
        Assert.assertEquals(message.toLowerCase().replaceAll("\\s",""), alert.getText().toString().toLowerCase().replaceAll("\\s",""));
        Thread.sleep(2000);
        alert.accept();

        System.out.println(">>>>> the_user_should_be_presented_with_the_following_prompt_alert ***** method =>>> " + message);
    }
}