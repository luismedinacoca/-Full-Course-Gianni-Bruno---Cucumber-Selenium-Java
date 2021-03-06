package Runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //features locations
        features ={"src/test/java/Features"},
        //Step files
        glue={"Step_Definitions"},
        tags={},
        dryRun = false,
        monochrome = true,
        plugin ={"pretty",
                "html:target/cucumber",
                "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"
        }
)
public class Main_Runner extends AbstractTestNGCucumberTests {
}
