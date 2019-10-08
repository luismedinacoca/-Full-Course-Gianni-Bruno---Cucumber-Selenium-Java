$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10086456495,
  "status": "passed"
});
formatter.before({
  "duration": 8279678836,
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
  "duration": 4138646337,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_enter_a_valid_first_name()"
});
formatter.result({
  "duration": 3143227189,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 802750063,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 199328616,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 213105025,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.i_click_on_the_sumit_button()"
});
formatter.result({
  "duration": 1881404545,
  "status": "passed"
});
formatter.match({
  "location": "ContactUS_Steps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 3062274347,
  "status": "passed"
});
formatter.after({
  "duration": 6712515273,
  "status": "passed"
});
formatter.after({
  "duration": 725442931,
  "status": "passed"
});
});