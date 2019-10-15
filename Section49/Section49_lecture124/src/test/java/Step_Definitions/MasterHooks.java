package Step_Definitions;

import Utils.DriverFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterSuite;

public class MasterHooks /*extends DriverFactory*/ {

    //private WebDriver driver;

    /*@Before
    public void setup(){
        driver = DriverFactory.getInstance().getDriver();
    }*/

   /* @After
    public void tearDown(){
        if(driver != null){
            driver.manage().deleteAllCookies();
            driver.quit();
            //driver = null;  /** very important  ========> DO NOT FORGET*/
     //   }
    //}
}
