Feature: Login into account
  Existing user should be able to login to account using correct credentials

  Scenario: Login into account with correct credentials
    Given user navigate to stackoverflow website
    And User click on login button
    And User enters a valid username
    And User enters a valid password
    When User clicks on the login button
    Then User should be taken to the successful login page