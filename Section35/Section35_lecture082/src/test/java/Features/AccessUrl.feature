Feature:  Submit data to different urls

  Scenario Outline: Access to an URL through Chrome
    Given I access "<url>"

    Examples:
      | url                                 |
      | https://www.webdriveruniversity.com |
      | https://www.facebook.com            |
      | https://www.udemy.com               |