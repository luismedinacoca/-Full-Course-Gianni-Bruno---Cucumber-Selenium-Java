Feature: Submit data to webdriveruniversity.com using contact us form

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