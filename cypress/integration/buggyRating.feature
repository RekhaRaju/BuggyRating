Feature: Multiple Features

    Feature This feature is required for a user to log in.
    Scenario: Success Login
    Given A user visits home page
    When A user enter the username "rekha"
    And A user enter the password "Test@12345"
    And A user clicks the login button
    Then A user will be logged in
   
    Scenario: Login Failed
    Given A user visits home page
    When A user enter the username "rekha"
    And A user enter the password "test@12345"
    And A user clicks the login button
    Then A failed warning message to display
    
    Scenario: User tries to vote for a car model without logging
    Given A user visits home page
    When I click on Overall Ratings Tile
    And I click on a model
    Then I get a message that you have to be logged in
    
    Scenario: Register a New user and login as newly created user
    Given A user visits home page
    When I click on Register button
    And register a user
    Then verify registration is a success
    Then login with newly created user
    Then I get a message that you have to be logged in
   
    Scenario: A logged in user tries to vote for a car model and validates increase in vote count
    Given A user visits home page
    And I log in as a Registered user
    When I click on Overall Ratings Tile
    And I click on a model
    And Click on vote button and Number of votes has increased by one 
    Then I get a thankyou message
    