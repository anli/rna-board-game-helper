Feature: Home

  Scenario: See UI
    Given any
    When I am at 'Home' screen
    Then I should see 'Add Game' button

  Scenario: Add game
    Given I am at 'Home' screen
    When I press 'Add Game' button
    Then I should see 'Board Game Search' screen