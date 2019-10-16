package Step_Definitions;

import Utils.DriverFactory;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactUs_Steps extends DriverFactory {
    @Given("^I access \"([^\"]*)\" contact us form$")
    public void i_access_contact_us_form(String url) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        /**driver.navigate().to(url);*/
        contactUsPage.getContactUsPage(url);
    }

    @When("^I enter a valid first name$")
    public void i_enter_a_valid_first_name() throws Exception {
        //Thread.sleep(3000);
        /**driver.findElement(By.xpath("//input[contains(@name, 'first_name')]")).sendKeys("Luis Javier");*/
        contactUsPage.enterFirstName("Luis Javier");
    }

    @And("^I enter a valid last name$")
    public void i_enter_a_valid_last_name(DataTable data_table) throws Exception {

        /***************************** DATA_TABLE INPUTS *****************************
        List<List<String>> data = data_table.raw();

        System.out.println("data = " + data);
        System.out.println( "data row number: "  +  data.size());
        int lengthColumn = data.get(0).size();
        System.out.println("data column number " + lengthColumn);

        for (int i=0; i < lengthColumn; i++){
            driver.findElement(By.xpath("//input[contains(@name,'last_name')]")).sendKeys(data.get(0).get(i) + " ");
        }*/
        contactUsPage.enterLastName(data_table, 0, 1);

    }

    @And("^I enter a valid email address$")
    public void i_enter_a_valid_email_address()  {
        /**driver.findElement(By.xpath("//input[contains(@name, 'email')]")).sendKeys("lmedina@belatrixsf.com");*/
        try {
            contactUsPage.enterEmailAddress("lmedina@belatrixsf.com");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @And("^I enter comments$")
    public void i_enter_comments(DataTable data_table)  {
        /**
        List<List<String>> data = data_table.raw();
        System.out.println("dataComment = " + data);
        System.out.println( "dataComment row number: "  +  data.size());
        int lengthColumn = data.get(0).size();
        System.out.println("dataComment column number " + lengthColumn);
        for (int i=0; i < lengthColumn; i++){
            driver.findElement(By.xpath("//textarea[contains(@name,'message')]")).sendKeys(data.get(0).get(i) + " ");
        }*/
        try {
            contactUsPage.enterComments(data_table, 0, 1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @And("^I click on the sumit button$")
    public void i_click_on_the_sumit_button() throws Exception {
        //driver.findElement(By.xpath("//*[@id,'form_buttons']/input[2]")).click();
        /**driver.findElement(By.xpath("//input[contains(@type, 'submit')]")).click();*/
        contactUsPage.clickOnSubmitButton();
    }

    @Then("^the information should successfully be submitted via the contact us form\\.$")
    public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws InterruptedException {

        /**Thread.sleep(3000);

        //Verifying the page title:
        String title = driver.getTitle();
        if(title.equals("Gianni Bruno - Designer")){
            System.out.println("the_information_should_successfully_be_submitted_via_the_contact_us_form method pass!!");
        }else{
            Assert.fail();
            System.out.println("the_information_should_successfully_be_submitted_via_the_contact_us_form failed");
        }

        //verifying the page message:
        WebElement thanksContactUsPage = driver.findElement(By.xpath("//*[@id='contact_reply']/h1"));
        Assert.assertEquals("Thank You for your Message!",thanksContactUsPage.getText().toString());
        System.out.println("Assert with: //*[@id='contact_reply']/h1 ");

        //changing the thanksContactUsPage variable to lower case and then deleting space
        Assert.assertEquals("thankyouforyourmessage!",thanksContactUsPage.getText().toLowerCase().replaceAll("[ ()0-9]",""));
        System.out.println("Assert with:  thankyouforyourmessage!");*/
        try {
            contactUsPage.confirmContactUsFormSubmissionWasSuccessful();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
