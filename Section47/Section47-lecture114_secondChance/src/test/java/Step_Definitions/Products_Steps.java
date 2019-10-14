package Step_Definitions;

import Utils.DriverFactory;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

public class Products_Steps extends DriverFactory {
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
    public void user_should_be_presented_with_a_promo_alert() throws InterruptedException {
        //System.out.println("passed");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//button[text()='Proceed']")).click();
    }
}