$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5698116141,
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
  "name": "I access \"http://webdriveruniversity.com/Contact-Us/contactus.html\" contact us form",
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
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Contact-Us/contactus.html",
      "offset": 10
    }
  ],
  "location": "ContactUs_Steps.i_access_contact_us_form(String)"
});
formatter.result({
  "duration": 6867119662,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_a_valid_first_name()"
});
formatter.result({
  "duration": 305291553,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 252127429,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 192871134,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 177099616,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.i_click_on_the_sumit_button()"
});
formatter.result({
  "duration": 3175621091,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 55799586,
  "status": "passed"
});
formatter.after({
  "duration": 792961757,
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
        "//*[@id\u003d\u0027amp-img\u0027]"
      ],
      "line": 8,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;2"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "//*[@id\u003d\u0027camera-img\u0027]"
      ],
      "line": 9,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;3"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "//*[@id\u003d\u0027laptop1\u0027]"
      ],
      "line": 10,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;4"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "//*[@id\u003d\u0027laptop2\u0027]"
      ],
      "line": 11,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;5"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "//*[@id\u003d\u0027nintendo\u0027]"
      ],
      "line": 12,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;6"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "//*[@id\u003d\u0027graphic-card\u0027]"
      ],
      "line": 13,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;7"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "//*[@id\u003d\u0027computer\u0027]"
      ],
      "line": 14,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;8"
    },
    {
      "cells": [
        "http://webdriveruniversity.com/Page-Object-Model/products.html",
        "//*[@id\u003d\u0027boombox\u0027]"
      ],
      "line": 15,
      "id": "products;validate-promo-code-alert-is-visible-when-clickin-ob-the-special-offers-link;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3258341252,
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
  "name": "user clicks on \"//*[@id\u003d\u0027amp-img\u0027]\"",
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
  "duration": 3088462535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027amp-img\u0027]",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 763019604,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 1270857407,
  "status": "passed"
});
formatter.after({
  "duration": 809729067,
  "status": "passed"
});
formatter.before({
  "duration": 3368514088,
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
  "name": "user clicks on \"//*[@id\u003d\u0027camera-img\u0027]\"",
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
  "duration": 2715918383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027camera-img\u0027]",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 254780522,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2554378714,
  "status": "passed"
});
formatter.after({
  "duration": 793537228,
  "status": "passed"
});
formatter.before({
  "duration": 3274489366,
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
  "name": "user clicks on \"//*[@id\u003d\u0027laptop1\u0027]\"",
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
  "duration": 3014442856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027laptop1\u0027]",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1270333418,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2022472306,
  "status": "passed"
});
formatter.after({
  "duration": 790123539,
  "status": "passed"
});
formatter.before({
  "duration": 3290384653,
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
  "name": "user clicks on \"//*[@id\u003d\u0027laptop2\u0027]\"",
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
  "duration": 2935801773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027laptop2\u0027]",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 410253409,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2012374754,
  "status": "passed"
});
formatter.after({
  "duration": 964413501,
  "status": "passed"
});
formatter.before({
  "duration": 3359876373,
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
  "name": "user clicks on \"//*[@id\u003d\u0027nintendo\u0027]\"",
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
  "duration": 3008491732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027nintendo\u0027]",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 269275213,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 1456878595,
  "status": "passed"
});
formatter.after({
  "duration": 829206945,
  "status": "passed"
});
formatter.before({
  "duration": 3366328213,
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
  "name": "user clicks on \"//*[@id\u003d\u0027graphic-card\u0027]\"",
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
  "duration": 2663178106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027graphic-card\u0027]",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 983915358,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 1407029428,
  "status": "passed"
});
formatter.after({
  "duration": 750196672,
  "status": "passed"
});
formatter.before({
  "duration": 3320825759,
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
  "name": "user clicks on \"//*[@id\u003d\u0027computer\u0027]\"",
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
  "duration": 2622824218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027computer\u0027]",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 961166247,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 1245575092,
  "status": "passed"
});
formatter.after({
  "duration": 728235308,
  "status": "passed"
});
formatter.before({
  "duration": 3343004688,
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
  "name": "user clicks on \"//*[@id\u003d\u0027boombox\u0027]\"",
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
  "duration": 3094009912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027boombox\u0027]",
      "offset": 16
    }
  ],
  "location": "Products_Steps.user_clicks_on(String)"
});
formatter.result({
  "duration": 562805212,
  "status": "passed"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 1344405637,
  "status": "passed"
});
formatter.after({
  "duration": 843011211,
  "status": "passed"
});
});