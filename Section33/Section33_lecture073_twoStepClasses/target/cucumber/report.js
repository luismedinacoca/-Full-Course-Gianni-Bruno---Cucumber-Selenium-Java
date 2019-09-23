$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4835739651,
  "status": "passed"
});
formatter.before({
  "duration": 3369792771,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.webdriveruniversity.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the contact us button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid first name",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter a valid last name",
  "rows": [
    {
      "cells": [
        "Lopez",
        "Mercado",
        "Carriso"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.webdriveruniversity.com",
      "offset": 10
    }
  ],
  "location": "ContactUs_Steps.iAccess(String)"
});
formatter.result({
  "duration": 5448860112,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.i_click_on_the_contact_us_button()"
});
formatter.result({
  "duration": 5103921208,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_a_valid_first_name()"
});
formatter.result({
  "duration": 4180026918,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.iEnterAValidLastName(DataTable)"
});
formatter.result({
  "duration": 166859137,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 164273748,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.iEnterComments(DataTable)"
});
formatter.result({
  "duration": 197793534,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 2280431476,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.theInformationShouldSuccessfullyBeSubmittedViaTheContactUsForm()"
});
formatter.result({
  "duration": 19215519,
  "status": "passed"
});
formatter.after({
  "duration": 3692305929,
  "status": "passed"
});
formatter.after({
  "duration": 3682472143,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to account with credentials",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user  enters the \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the following prompt alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 12,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "user1",
        "pass1",
        "validation failed"
      ],
      "line": 13,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;login-to-account-with-credentials;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 14,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;login-to-account-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3308569619,
  "status": "passed"
});
formatter.before({
  "duration": 3302975701,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to account with credentials",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user  enters the \"user1\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"pass1\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the following prompt alert \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "Login_Steps.user_navigates_to(String)"
});
formatter.result({
  "duration": 1873826182,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_clicks_on_the_login_portal_button()"
});
formatter.result({
  "duration": 3164348503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 18
    }
  ],
  "location": "Login_Steps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 4191872739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass1",
      "offset": 17
    }
  ],
  "location": "Login_Steps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 98563896,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 98459169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 62
    }
  ],
  "location": "Login_Steps.the_user_should_be_presented_with_the_following_prompt_alert(String)"
});
formatter.result({
  "duration": 2031055344,
  "status": "passed"
});
formatter.after({
  "duration": 3672235314,
  "status": "passed"
});
formatter.after({
  "duration": 3754096794,
  "status": "passed"
});
formatter.before({
  "duration": 3477476051,
  "status": "passed"
});
formatter.before({
  "duration": 3268350813,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to account with credentials",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;login-to-account-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user  enters the \"webdriver\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters the \"webdriver123\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the following prompt alert \"validation succeeded\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "Login_Steps.user_navigates_to(String)"
});
formatter.result({
  "duration": 2470425471,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_clicks_on_the_login_portal_button()"
});
formatter.result({
  "duration": 3120756914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 18
    }
  ],
  "location": "Login_Steps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 4286167500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 17
    }
  ],
  "location": "Login_Steps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 130862569,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 102498046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 62
    }
  ],
  "location": "Login_Steps.the_user_should_be_presented_with_the_following_prompt_alert(String)"
});
formatter.result({
  "duration": 2025208599,
  "status": "passed"
});
formatter.after({
  "duration": 3718954969,
  "status": "passed"
});
formatter.after({
  "duration": 3729417826,
  "status": "passed"
});
});