$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login in webdriveruniversity url",
  "description": "",
  "id": "login-in-webdriveruniversity-url",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-in-webdriveruniversity-url;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "id": "login-in-webdriveruniversity-url;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 12,
      "id": "login-in-webdriveruniversity-url;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "user1",
        "pass1",
        "validation failed"
      ],
      "line": 13,
      "id": "login-in-webdriveruniversity-url;login-to-account-with-credentials;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 14,
      "id": "login-in-webdriveruniversity-url;login-to-account-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5268774754,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-in-webdriveruniversity-url;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "location": "LoginSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 2518800848,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_portal_button()"
});
formatter.result({
  "duration": 3106197742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 18
    }
  ],
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 4203234135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass1",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 90168819,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 95190442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 62
    }
  ],
  "location": "LoginSteps.the_user_should_be_presented_with_the_following_prompt_alert(String)"
});
formatter.result({
  "duration": 2032416458,
  "status": "passed"
});
formatter.after({
  "duration": 3762343720,
  "status": "passed"
});
formatter.before({
  "duration": 3409563192,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-in-webdriveruniversity-url;login-to-account-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "location": "LoginSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 2379120333,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_portal_button()"
});
formatter.result({
  "duration": 3157276822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 18
    }
  ],
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 4217825437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "duration": 120100384,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 94611092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 62
    }
  ],
  "location": "LoginSteps.the_user_should_be_presented_with_the_following_prompt_alert(String)"
});
formatter.result({
  "duration": 2029209404,
  "status": "passed"
});
formatter.after({
  "duration": 3831739151,
  "status": "passed"
});
});