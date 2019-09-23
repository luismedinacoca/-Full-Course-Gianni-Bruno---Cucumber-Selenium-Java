package Step_Definitions;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class ContactUs_Steps {
    //create a webdriver object
    private WebDriver driver;

    // <Begin>************************************** Hook **************************************

    @Before
    public void setup(){
        System.out.println(System.getProperty("user.dir"));
        System.setProperty("webdriver.chrome.driver", "D:\\Programming\\[Cucumber]\\Gianni Bruno - [Full course] Cucumber Selenium Java\\Section33\\Section33_lecture073\\src\\test\\java\\Drivers\\chromedriver.exe");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
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
        driver.findElement(By.id("contact-us")).click();
    }

    @And("^I enter a valid first name$")
    public void i_enter_a_valid_first_name() throws Throwable {
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
        driver.findElement(By.xpath("//input[contains(@name, 'first_name')]")).sendKeys("Luis Javier");
    }

    /**
     @And("^I enter a valid last name$")
     public void i_enter_a_valid_last_name() throws Throwable {
     // Write code here that turns the phrase above into concrete actions
     //throw new PendingException();

     driver.findElement(By.xpath("//input[contains(@name, 'last_name')]")).sendKeys("Medina Coca");
     }

     **/

    @And("^I enter a valid last name$")
    public void iEnterAValidLastName(DataTable data_table) {

        List<List<String>> data = data_table.raw();
        driver.findElement(By.xpath("//input[contains(@name, 'last_name')]")).sendKeys(data.get(0).get(0)+ " ");
        driver.findElement(By.xpath("//input[contains(@name, 'last_name')]")).sendKeys(data.get(0).get(1)+ " ");
        driver.findElement(By.xpath("//input[contains(@name, 'last_name')]")).sendKeys(data.get(0).get(2)+ ".");
    }

    @And("^I enter a valid email address$")
    public void i_enter_a_valid_email_address() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();

        driver.findElement(By.xpath("//input[contains(@name, 'email')]")).sendKeys("luismedinacoca@belatrixsf.com");
    }

    @And("^I enter comments$")
    public void iEnterComments(DataTable data_table) {

        // ***************************** DATA_TABLE INPUTS *****************************
        List<List<String>> data = data_table.raw();
        driver.findElement(By.xpath("//textarea[contains(@name,'message')]")).sendKeys(data.get(0).get(0) + "\n"); //salto de página
        driver.findElement(By.xpath("//textarea[contains(@name,'message')]")).sendKeys(data.get(0).get(1));
    }

    @And("^I click on the submit button$")
    public void i_click_on_the_submit_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        driver.findElement(By.xpath("//input[contains(@type,'submit')]")).click();
    }

    @Then("^The information should successfully be submitted via the contact us form$")
    public void theInformationShouldSuccessfullyBeSubmittedViaTheContactUsForm() {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println(driver.getTitle());
        Assert.assertEquals("Gianni Bruno - Designer", driver.getTitle());
    }
}
