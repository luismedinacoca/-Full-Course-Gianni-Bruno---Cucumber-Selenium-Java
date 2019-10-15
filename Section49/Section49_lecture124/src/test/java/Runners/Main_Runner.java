package Runners;

import Utils.DriverFactory;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterSuite;

import java.sql.Driver;
import java.util.logging.Logger;

@RunWith(Cucumber.class)
@CucumberOptions(
        //features locations
        features ={"src/test/java/Features"},
        //Step files
        glue={"Step_Definitions"},
        tags={},
        dryRun = false, //when dryRun is true, execute the cucumber steps but they are skipped
        monochrome = true,
        plugin ={"pretty",
                "html:target/cucumber",
                "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"
        }
)
public class Main_Runner {
        static Logger logger = Logger.getLogger(Main_Runner.class.getName());
        @AfterClass
        public static void tearDown(){
                WebDriver driver = DriverFactory.getInstance().getDriver();
                if(driver != null){
                        driver.manage().deleteAllCookies();
                        driver.quit();
                        logger.info("CERRANDO!!!!");
                        //driver = null;  /** very important  ========> DO NOT FORGET*/
                }
        }
}
