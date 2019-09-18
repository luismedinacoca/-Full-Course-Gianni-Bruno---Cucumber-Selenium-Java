Feature: Login to account at webdriveruniversity.com using login portal

  Background:
    Given I access "https://www.webdriveruniversity.com"
    When I click on the login portal button
    And I enter a username
  Scenario: Login account with a valid password
    And I enter a "valid" password
    When I click on the login button
    Then I should be presented with a successful validation alert

  Scenario: Login account with an invalid password
    And I enter a "invalid" password
    When I click on the login button
    Then I should be presented with an unsuccessful validation alert