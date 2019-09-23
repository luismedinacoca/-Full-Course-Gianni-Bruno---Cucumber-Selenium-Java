Feature: Submit data to webdriveruniversity.com using contact us form
  @Regression
  Scenario Outline: Login to account with credentials
    Given User navigates to "<url>"
    When user clicks on the login portal button
    And user  enters the "<username>" username
    And user enters the "<password>" password
    And user clicks on the login button
    Then the user should be presented with the following prompt alert "<message>"

    Examples:
      |                  url               | username |    password  |      message         |
      | http://www.webdriveruniversity.com |   user1  |     pass1    | validation failed    |
      | http://www.webdriveruniversity.com | webdriver| webdriver123 | validation succeeded |

  @SmokeTest
  Scenario: Submit valid data via contact us form
    Given I access "https://www.webdriveruniversity.com"
    When I click on the contact us button
    And I enter a valid first name
    And I enter a valid last name
      | Lopez | Mercado | Carriso |
    And I enter a valid email address
    And I enter comments
      | example comment one | example comment two |
    And I click on the submit button
    Then The information should successfully be submitted via the contact us form
