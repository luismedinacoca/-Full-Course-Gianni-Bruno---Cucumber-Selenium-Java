Feature:  Submit data to different urls

  @chrome
  Scenario Outline: Access to an URL through Chrome
    Given I access "<url>"

    Examples:
      | url                                 |
      | https://www.webdriveruniversity.com |
      | https://www.facebook.com            |
      | https://www.udemy.com               |

  @firefox
  Scenario Outline: Access to an URL through Firefox
    Given I access "<url>"

    Examples:
      | url                                 |
      | https://www.webdriveruniversity.com |
      | https://www.facebook.com            |
      | https://www.udemy.com               |

  @internetExplorer
  Scenario Outline: Access to an URL through Internet Explorer
    Given I access "<url>"

  Examples:
    | url                                 |
    | https://www.webdriveruniversity.com |
    | https://www.facebook.com            |
    | https://www.udemy.com               |
