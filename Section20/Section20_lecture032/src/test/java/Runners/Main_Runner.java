package Runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class) //Mandatory when setting up a Cucumber runner class
@CucumberOptions(
        features ={"src/test/java/Features"},
        glue = "/Steps_Definitions",
        tags={"@SmokeTest"},
        dryRun = true,
        monochrome = true,
        plugin ={"pretty",
                "html:target/cucumber",
                "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"
        }
)
public class Main_Runner {
}