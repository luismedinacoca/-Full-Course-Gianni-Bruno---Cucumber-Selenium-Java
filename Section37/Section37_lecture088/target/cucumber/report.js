$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccessUrl.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to different urls",
  "description": "",
  "id": "submit-data-to-different-urls",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Access to an URL through Chrome",
  "description": "",
  "id": "submit-data-to-different-urls;access-to-an-url-through-chrome",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I access \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "submit-data-to-different-urls;access-to-an-url-through-chrome;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 7,
      "id": "submit-data-to-different-urls;access-to-an-url-through-chrome;;1"
    },
    {
      "cells": [
        "https://www.linkedin.com"
      ],
      "line": 8,
      "id": "submit-data-to-different-urls;access-to-an-url-through-chrome;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com"
      ],
      "line": 9,
      "id": "submit-data-to-different-urls;access-to-an-url-through-chrome;;3"
    },
    {
      "cells": [
        "https://www.udemy.com"
      ],
      "line": 10,
      "id": "submit-data-to-different-urls;access-to-an-url-through-chrome;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11661396454,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Access to an URL through Chrome",
  "description": "",
  "id": "submit-data-to-different-urls;access-to-an-url-through-chrome;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.linkedin.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.linkedin.com",
      "offset": 10
    }
  ],
  "location": "AccessUrl_Steps.i_access(String)"
});
formatter.result({
  "duration": 2079179770,
  "status": "passed"
});
formatter.after({
  "duration": 6871742658,
  "status": "passed"
});
formatter.before({
  "duration": 8348719771,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Access to an URL through Chrome",
  "description": "",
  "id": "submit-data-to-different-urls;access-to-an-url-through-chrome;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I access \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 10
    }
  ],
  "location": "AccessUrl_Steps.i_access(String)"
});
formatter.result({
  "duration": 3309521114,
  "status": "passed"
});
formatter.after({
  "duration": 6820078640,
  "status": "passed"
});
formatter.before({
  "duration": 8321012194,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Access to an URL through Chrome",
  "description": "",
  "id": "submit-data-to-different-urls;access-to-an-url-through-chrome;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.udemy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.udemy.com",
      "offset": 10
    }
  ],
  "location": "AccessUrl_Steps.i_access(String)"
});
formatter.result({
  "duration": 2480145377,
  "status": "passed"
});
formatter.after({
  "duration": 8919870984,
  "status": "passed"
});
});