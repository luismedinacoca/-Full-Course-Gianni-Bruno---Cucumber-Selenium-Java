package Step_Definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

    @Given("^user navigate to stackoverflow website$")
    public void user_navigate_to_stackoverflow_website() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("1. We're inside user_navigate_to_stackoverflow_website method");
        System.out.println("");
    }

    @And("^User click on login button$")
    public void user_click_on_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("2. inside user_click_on_login_button method");
        System.out.println("");
    }

    @And("^User enters a valid username$")
    public void user_enters_a_valid_username() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("3. inside user_enters_a_valid_username method");
        System.out.println("");
    }

    @And("^User enters a valid password$")
    public void user_enters_a_valid_password() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("4. we're inside user_enters_a_valid_password method");
        System.out.println("");
    }

    @When("^User clicks on the login button$")
    public void user_clicks_on_the_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("5. user_clicks_on_the_login_button method");
        System.out.println();
    }

    @Then("^User should be taken to the successful login page$")
    public void user_should_be_taken_to_the_successful_login_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        System.out.println("6. user_should_be_taken_to_the_successful_login_page method");
        System.out.println();
    }
}
