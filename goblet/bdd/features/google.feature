@google @search
Feature: Search Google
  Example: Find GobletQA
    Given I navigate to "google.com"
    And I click "search"
    And I write "gobletqa.com"
    And I press "Enter"
  