package Step_Definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps2 {
    //****************++++++++++++** new Login2.feature ****************++++++++++++**

    @Given("^user navigate to stackoverflow website(\\d+)$")
    public void user_navigate_to_stackoverflow_website(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("1. We're inside user_navigate_to_stackoverflow_website2 method");
        System.out.println("");
    }

    @And("^User click on login button on homepage(\\d+)$")
    public void user_click_on_login_button_on_homepage(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("2. inside user_click_on_login_button2 method");
        System.out.println("");
    }

    @And("^User enters a valid username(\\d+)$")
    public void user_enters_a_valid_username(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("3. inside user_enters_a_valid_username2 method");
        System.out.println("");
    }

    @And("^User enters a valid password(\\d+)$")
    public void user_enters_a_valid_password(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("4. we're inside user_enters_a_valid_password2 method");
        System.out.println("");
    }

    @When("^User clicks on the login button(\\d+)$")
    public void user_clicks_on_the_login_button(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("5. user_clicks_on_the_login_button2 method");
        System.out.println();
    }

    @Then("^User should be taken to the successful login page(\\d+)$")
    public void user_should_be_taken_to_the_successful_login_page(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("6. user_should_be_taken_to_the_successful_login_page2 method");
        System.out.println();
    }
}
