package Step_Definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class AccessUrl_Steps {

    WebDriver driver;

    @Before
    public void setup() throws Exception {

        try{
            //System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath() + "\\src\\test\\java\\Drivers\\chromedriver.exe");
            System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/src/test/java/Drivers/chromedriver.exe");
            this.driver = new ChromeDriver();
            this.driver.manage().window().maximize();
            this.driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        Thread.sleep(5000);
    }

    @After
    public void tearDown() throws InterruptedException {
        Thread.sleep(6000);
        driver.manage().deleteAllCookies();
        driver.close();
        driver.quit();
    }

    @Given("^I access \"([^\"]*)\"$")
    public void i_access(String url){
        //Thread.sleep(5000);
        driver.get(url);
    }

}
