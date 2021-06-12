Feature: Home

  Scenario: See UI
    Given any
    When I am at 'Home' screen
    Then I should see 'Add Game' button

  Scenario: Add game
    Given I am at 'Home' screen
    When I press 'Add Game' button
    Then I should see 'Board Game Search' screen

  Scenario: Multiple games in collection
    Given I have game 'Board Game A'
    And I have game 'Board Game B'
    When I am at 'Home' screen
    Then I should see 'Board Game A' game
    Then I should see 'Board Game B' game