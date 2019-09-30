package Utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.concurrent.TimeUnit;

public class DriverFactory {

    public static WebDriver driver;

    public WebDriver getDriver(){
        try{
            //Read config
            ReadConfigFile file = new ReadConfigFile();
            String browserName = file.getBrowser();
            switch (browserName){
                case "firefox":
                    if(null == driver){
                        System.setProperty("webdriver.gecko.driver", Constant.GECKO_DRIVER_DIRECTORY);
                        DesiredCapabilities capabilities = DesiredCapabilities.firefox();
                        capabilities.setCapability("marionette", true);
                        driver = new FirefoxDriver();
                    }
                    break;

                case "chrome":
                    //code
                    if(null == driver){
                        System.setProperty("webdriver.chrome.driver",Constant.CHROME_DRIVER_DIRECTORY);
                        //Chrome options
                        driver = new ChromeDriver();
                        driver.manage().window().maximize();
                    }
                    break;

                case "ie":
                    //code
                    if(null == driver){
                        System.setProperty("webdriver.ie.driver", Constant.IE_DRIVER_DIRECTORY);
                        DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
                        capabilities.setCapability("ignoreZoomSetting", true);
                        driver = new InternetExplorerDriver(capabilities);
                        driver.manage().window().maximize();
                    }
                    break;
                case "opera":
                    if(null == driver){
                        System.setProperty("webdriver.opera.driver",Constant.OPERA_DRIVER_DIRECTORY);
                        driver = new OperaDriver();
                        driver.manage().window().maximize();
                    }
                    break;
            }

        } catch(Exception e){
            System.out.println("Unable to load browser " + e.getMessage());
        } finally {
            driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
        }

        return driver;
    }
}