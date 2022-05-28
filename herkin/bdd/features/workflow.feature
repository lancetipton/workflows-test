@browser=chromium
Feature: Workflow
  As an internet user
  I want to navigate to google
  
  Scenario: I go to the GobletQA Website
    Given I navigate to "https://gobletqa.com"
    Then the element "h1" contains the text "Let us test that for you"
