$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20618069878,
  "error_message": "java.lang.NullPointerException\r\n\tat Utils.DriverFactory.getDriver(DriverFactory.java:93)\r\n\tat Step_Definitions.MasterHooks.setup(MasterHooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\r\n\tat org.testng.TestRunner.run(TestRunner.java:589)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_a_valid_first_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_a_valid_email_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUs_Steps.i_enter_comments(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUs_Steps.i_click_on_the_sumit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUs_Steps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 177366,
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
  "duration": 20017613239,
  "error_message": "java.lang.NullPointerException\r\n\tat Utils.DriverFactory.getDriver(DriverFactory.java:93)\r\n\tat Step_Definitions.MasterHooks.setup(MasterHooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\r\n\tat org.testng.TestRunner.run(TestRunner.java:589)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 33851,
  "status": "passed"
});
formatter.before({
  "duration": 20021128835,
  "error_message": "java.lang.NullPointerException\r\n\tat Utils.DriverFactory.getDriver(DriverFactory.java:93)\r\n\tat Step_Definitions.MasterHooks.setup(MasterHooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\r\n\tat org.testng.TestRunner.run(TestRunner.java:589)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29620,
  "status": "passed"
});
formatter.before({
  "duration": 20024661355,
  "error_message": "java.lang.NullPointerException\r\n\tat Utils.DriverFactory.getDriver(DriverFactory.java:93)\r\n\tat Step_Definitions.MasterHooks.setup(MasterHooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\r\n\tat org.testng.TestRunner.run(TestRunner.java:589)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 118480,
  "status": "passed"
});
formatter.before({
  "duration": 20026693136,
  "error_message": "java.lang.NullPointerException\r\n\tat Utils.DriverFactory.getDriver(DriverFactory.java:93)\r\n\tat Step_Definitions.MasterHooks.setup(MasterHooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\r\n\tat org.testng.TestRunner.run(TestRunner.java:589)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 112838,
  "status": "passed"
});
formatter.before({
  "duration": 20022380978,
  "error_message": "java.lang.NullPointerException\r\n\tat Utils.DriverFactory.getDriver(DriverFactory.java:93)\r\n\tat Step_Definitions.MasterHooks.setup(MasterHooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\r\n\tat org.testng.TestRunner.run(TestRunner.java:589)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 71933,
  "status": "passed"
});
formatter.before({
  "duration": 20029912180,
  "error_message": "java.lang.NullPointerException\r\n\tat Utils.DriverFactory.getDriver(DriverFactory.java:93)\r\n\tat Step_Definitions.MasterHooks.setup(MasterHooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\r\n\tat org.testng.TestRunner.run(TestRunner.java:589)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 41256,
  "status": "passed"
});
formatter.before({
  "duration": 20017138616,
  "error_message": "java.lang.NullPointerException\r\n\tat Utils.DriverFactory.getDriver(DriverFactory.java:93)\r\n\tat Step_Definitions.MasterHooks.setup(MasterHooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\r\n\tat org.testng.TestRunner.run(TestRunner.java:589)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29973,
  "status": "passed"
});
formatter.before({
  "duration": 20024443790,
  "error_message": "java.lang.NullPointerException\r\n\tat Utils.DriverFactory.getDriver(DriverFactory.java:93)\r\n\tat Step_Definitions.MasterHooks.setup(MasterHooks.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:656)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:847)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:685)\r\n\tat org.testng.TestRunner.run(TestRunner.java:589)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Products_Steps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 75460,
  "status": "passed"
});
});