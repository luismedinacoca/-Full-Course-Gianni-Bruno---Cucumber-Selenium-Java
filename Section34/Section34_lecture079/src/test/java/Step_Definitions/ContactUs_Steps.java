package Step_Definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

public class ContactUs_Steps {

    WebDriver driver;

    @Before("@chrome")
    public void setupChrome() throws IOException {
        System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath() + "\\src\\test\\java\\Drivers\\chromedriver.exe");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }

    @Before("@firefox")
    public void setupFirefox() throws IOException {
        System.setProperty("webdriver.gecko.driver", Paths.get(System.getProperty("user.dir")).toRealPath() + "\\src\\test\\java\\Drivers\\geckodriver.exe");
        this.driver = new FirefoxDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }

    @Before("@internetExplorer")
    public void setupIE() throws IOException {
        System.setProperty("webdriver.ie.driver", Paths.get(System.getProperty("user.dir")).toRealPath() + "\\src\\test\\java\\Drivers\\IEDriverServer.exe");
        this.driver = new InternetExplorerDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }

    @After
    public void tearDown() throws InterruptedException {
        Thread.sleep(6000);
        driver.manage().deleteAllCookies();
        driver.quit();
    }

    /**
    @Given("^I access webdriveruniversity$")
    public void i_access_webdriveruniversity(String url) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        Thread.sleep(5000);
        driver.get(url);
    }
    **/

    @Given("^I access \"([^\"]*)\"$")
    public void i_access(String url) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        Thread.sleep(5000);
        driver.get(url);
    }
}