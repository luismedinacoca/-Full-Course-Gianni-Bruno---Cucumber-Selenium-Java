Feature: Submit data to webdriveruniversity.com using contact us form

  Background:
    Given I access "http://webdriveruniversity.com/"
    When I click on the contact us button

  Scenario: Submit valid data via contact us form
    And I enter a valid first name
    And I enter a valid last name
    And I enter a valid email address
    And I enter comments
    When I click on the submit button
    Then the information should successfully be submitted via the contact us form

  Scenario: Submit non valid data via contact us form
    And I enter a non valid first name
    And I enter a non valid last name
    And I enter a non valid email address
    And I enter no comments
    When I click on the submit button
    Then the information should not successfully be submitted via the contact us form
    And the user should also be notified of the problem.
