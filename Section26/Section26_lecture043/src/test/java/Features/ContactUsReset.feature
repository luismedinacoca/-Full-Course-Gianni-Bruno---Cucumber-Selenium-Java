Feature:  If a user clicks on the reset button then all information should be removed from the contact us form

  Scenario: Enter information to the contact us form, when click on the reset button then information should be removed
    Given I access webdriveruniversity
    And I click on the contact us button
    And I enter a first name
    And I enter a last name
    And I enter an email address
    And I enter comments
    When I click on the reset button
    Then the information which was listed by the user on the contact us form should now be removed