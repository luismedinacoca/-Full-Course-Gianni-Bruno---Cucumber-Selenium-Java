package Runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //features locations
        features ={"src/test/java/Features"},
        //Step files
        glue={"Step_Definitions"},
        dryRun = false, //when dryRun is true, execute the cucumber steps but they are skipped
        monochrome = true,
        plugin ={"pretty",
                "html:target/cucumber",
                "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"
        }
)
public class Main_Runner {
}
