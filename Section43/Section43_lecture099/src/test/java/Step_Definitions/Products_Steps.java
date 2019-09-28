package Step_Definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;


public class Products_Steps {

    private WebDriver driver;

    @Before
    public void setup() throws Exception {

        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/src/test/java/Drivers/chromedriver.exe");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);

        Thread.sleep(5000);
    }


    @After
    public void tearDown() throws InterruptedException {
        //Thread.sleep(6000);
        driver.manage().deleteAllCookies();
        driver.quit();
        //driver.close();
    }


    @Given("^user navigates to \"([^\"]*)\" website$")
    public void user_navigates_to_website(String url) throws InterruptedException {
        Thread.sleep(6000);
        driver.get(url);
    }

    @When("^user clicks on \"([^\"]*)\"$")
    public void user_clicks_on(String locator) throws InterruptedException {
        Thread.sleep(2000);
        //driver.findElement(By.cssSelector(locator));
        // //*[@id="special-offers"]
        driver.findElement(By.xpath("//*[@id=\""+locator+"\"]")).click();
        System.out.println(locator);
        Thread.sleep(2000);
    }

    @Then("^user should be presented with a promo alert$")
    public void user_should_be_presented_with_a_promo_alert()  {
        System.out.println("passed");
    }
}