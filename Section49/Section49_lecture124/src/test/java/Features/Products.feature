Feature: Products
  Scenario Outline: validate promo code alert is visible when clickin ob the special offers link
    Given user navigates to "<url>" website
    When user clicks on "<button>"
    Then user should be presented with a promo alert
    Examples:
      | url                                                            | button          |
      | http://webdriveruniversity.com/Page-Object-Model/products.html | special-offers  |
      | http://webdriveruniversity.com/Page-Object-Model/products.html | cameras         |
      | http://webdriveruniversity.com/Page-Object-Model/products.html | new-laptops     |
      | http://webdriveruniversity.com/Page-Object-Model/products.html | used-laptops    |
      | http://webdriveruniversity.com/Page-Object-Model/products.html | game-consoles   |