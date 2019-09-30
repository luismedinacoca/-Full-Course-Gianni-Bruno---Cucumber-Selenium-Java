$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11873959471,
  "status": "passed"
});
formatter.before({
  "duration": 9828765590,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I access webdriveruniversity contact us form",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter a valid first name",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I enter a valid last name",
  "rows": [
    {
      "cells": [
        "Woods",
        "Jackson",
        "Jones",
        "Medina Coca"
      ],
      "line": 6
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the sumit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the information should successfully be submitted via the contact us form.",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUS_Steps.i_access_webdriveruniversity_contact_us_form()"
});
formatter.result({
  "duration": 2436232539,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_enter_a_valid_first_name()"
});
formatter.result({
  "duration": 5411807808,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 1555425244,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 370965928,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 437828132,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_click_on_the_sumit_button()"
});
formatter.result({
  "duration": 3412156546,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 3477945737,
  "status": "passed"
});
formatter.after({
  "duration": 7506658999,
  "status": "passed"
});
formatter.after({
  "duration": 1477139302,
  "status": "passed"
});
formatter.uri("Products.feature");
formatter.feature({
  "line": 1,
  "name": "Products",
  "description": "",
  "id": "products",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "validate promo code alert is visible when clickin ob the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks on \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;",
  "rows": [
    {
      "cells": [
        "url",
        "button"
      ],
      "line": 7,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;1"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "special-offers"
      ],
      "line": 8,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;2"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "cameras"
      ],
      "line": 9,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;3"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "new-laptops"
      ],
      "line": 10,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;4"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "used-laptops"
      ],
      "line": 11,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;5"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "game-consoles"
      ],
      "line": 12,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;6"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "components"
      ],
      "line": 13,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;7"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "desktop-systems"
      ],
      "line": 14,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;8"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "audio"
      ],
      "line": 15,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9705491695,
  "status": "passed"
});
formatter.before({
  "duration": 9064042325,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "validate promo code alert is visible when clickin ob the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to \"http://webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks on \"special-offers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "Products_Steps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 8809154082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "special-offers",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 4269648444,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2161972216,
  "status": "passed"
});
formatter.after({
  "duration": 7195137621,
  "status": "passed"
});
formatter.after({
  "duration": 1520507331,
  "status": "passed"
});
formatter.before({
  "duration": 8980135314,
  "status": "passed"
});
formatter.before({
  "duration": 8779890032,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "validate promo code alert is visible when clickin ob the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to \"http://webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks on \"cameras\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "Products_Steps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 8980875104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cameras",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 4394907221,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2169571821,
  "status": "passed"
});
formatter.after({
  "duration": 7089459675,
  "status": "passed"
});
formatter.after({
  "duration": 1119364429,
  "status": "passed"
});
formatter.before({
  "duration": 9695715737,
  "status": "passed"
});
formatter.before({
  "duration": 10624085091,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "validate promo code alert is visible when clickin ob the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to \"http://webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks on \"new-laptops\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "Products_Steps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 8767868962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new-laptops",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 7207927750,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2235657562,
  "status": "passed"
});
formatter.after({
  "duration": 7828227848,
  "status": "passed"
});
formatter.after({
  "duration": 1742681872,
  "status": "passed"
});
formatter.before({
  "duration": 9122271404,
  "status": "passed"
});
formatter.before({
  "duration": 8785002982,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "validate promo code alert is visible when clickin ob the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to \"http://webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks on \"used-laptops\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "Products_Steps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 8795538124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "used-laptops",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 7465187344,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2160812811,
  "status": "passed"
});
formatter.after({
  "duration": 6670837540,
  "status": "passed"
});
formatter.after({
  "duration": 1400020875,
  "status": "passed"
});
formatter.before({
  "duration": 8962763630,
  "status": "passed"
});
formatter.before({
  "duration": 9650907618,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "validate promo code alert is visible when clickin ob the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to \"http://webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks on \"game-consoles\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "Products_Steps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 10089759752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "game-consoles",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 4654656644,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2054364748,
  "status": "passed"
});
formatter.after({
  "duration": 6877206369,
  "status": "passed"
});
formatter.after({
  "duration": 3315828595,
  "status": "passed"
});
formatter.before({
  "duration": 8686794170,
  "status": "passed"
});
formatter.before({
  "duration": 8945069654,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "validate promo code alert is visible when clickin ob the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to \"http://webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks on \"components\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "Products_Steps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 8892867155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "components",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 7018614307,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2189661477,
  "status": "passed"
});
formatter.after({
  "duration": 7023015674,
  "status": "passed"
});
formatter.after({
  "duration": 892597050,
  "status": "passed"
});
formatter.before({
  "duration": 8386583694,
  "status": "passed"
});
formatter.before({
  "duration": 8732757463,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "validate promo code alert is visible when clickin ob the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to \"http://webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks on \"desktop-systems\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "Products_Steps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 8753177521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "desktop-systems",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 6597376106,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2075096873,
  "status": "passed"
});
formatter.after({
  "duration": 6957720499,
  "status": "passed"
});
formatter.after({
  "duration": 1800542819,
  "status": "passed"
});
formatter.before({
  "duration": 8676617287,
  "status": "passed"
});
formatter.before({
  "duration": 8535829251,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "validate promo code alert is visible when clickin ob the special offers link",
  "description": "",
  "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to \"http://webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks on \"audio\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "Products_Steps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 9097220073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "audio",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 6912715269,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2117200065,
  "status": "passed"
});
formatter.after({
  "duration": 6665844834,
  "status": "passed"
});
formatter.after({
  "duration": 724577803,
  "status": "passed"
});
});