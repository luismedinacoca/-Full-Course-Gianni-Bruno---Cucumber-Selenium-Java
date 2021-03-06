Feature: Submit data to webdriveruniversity.com using contact us form
  A user should be to submit information via the contact us form

  Scenario: Submit information using the contact us form
    Given I access webdriveruniversity
    And I click on the contact us button
    And I enter a first name
    And I enter a last name
    And I enter an email address
    And I enter comments
    When I click on the submit button
    Then the information should successfully be submitted via the contact us form