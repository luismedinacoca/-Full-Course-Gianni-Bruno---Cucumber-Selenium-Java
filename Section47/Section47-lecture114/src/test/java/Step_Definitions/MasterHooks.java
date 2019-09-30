package Step_Definitions;

import Utils.DriverFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class MasterHooks extends DriverFactory {

    @Before
    public void setup() throws InterruptedException {
        driver = getDriver();
        System.out.println("Before tag ***********");
    }

    @After
    public void tearDown() throws InterruptedException {
        if(driver != null){
            driver.manage().deleteAllCookies();
            driver.quit();
            System.out.println("After tag ***********");
        }
        Thread.sleep(5000);
    }
}