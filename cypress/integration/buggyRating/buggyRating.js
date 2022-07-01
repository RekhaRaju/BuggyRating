import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const username = `testname${id}`
    const firstName = `firstname${id}`
    const password = 'Test@12345'

Given('A user visits home page', ()=>{
    cy.visit('/')
})


When('A user enter the username {string}', (username)=>{
    cy.get("input[name=login]").type(username);

})
And('A user enter the password {string}', (password)=>{
    cy.get("input[name=password]").type(password);

})

And('A user clicks the login button', ()=>{
    cy.get("button").contains("Login").click();

})
Then('A user will be logged in',()=>{
    cy.get('[href="/profile"]').should('have.text', "Profile");
    cy.get('.nav-link').first().should('have.text', "Hi, rekha");

})
Then('A failed warning message to display',()=>{
    cy.get('.label').should('have.text', "Invalid username/password");

})
When ('I click on Overall Ratings Tile', ()=>{
    cy.get(':nth-child(3) > .card > a > .img-fluid').should('be.visible').click();

})
And ('I click on a model', ()=>{
    cy.get(':nth-child(2) > :nth-child(3) > a').click();

})
Then ('I get a message that you have to be logged in',()=>{
    cy.get('.card-text').should('have.text', "You need to be logged in to vote.")

})

When ('I click on Register button', ()=>{
    cy.get('[href="/register"]').should('have.text', "Register").click();
    cy.url().should('eq', 'https://buggy.justtestit.org/register')


})
And ('register a user', ()=>{
    cy.get('#username').type(username);
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type('xyz');
    cy.get('#password').type(password);
    cy.get('#confirmPassword').type(password);
    cy.get('.btn-default').contains("Register").click()
    cy.wait(2000);})
        
    
Then ('verify registration is a success',()=>{
    cy.get('.result').contains("Registration is successful").should('be.visible');

})
Then ('login with newly created user',()=>{
    cy.get("input[name=login]").type(username);
    cy.get("input[name=password]").type('Test@12345');
    cy.get("button").contains("Login").click();
    
})

Then ('I get a message that you have to be logged in',()=>{
    cy.get('.nav-link').first().should('have.text', "Hi, " + firstName);
})

When ('I click on Overall Ratings Tile', ()=>{
    cy.get(':nth-child(3) > .card > a > .img-fluid').should('be.visible').click();

})
And ('I click on a model', ()=>{
    cy.get(':nth-child(2) > :nth-child(3) > a').click();

})
Then ('I get a message that you have to be logged in',()=>{
    cy.get('.card-text').should('have.text', "You need to be logged in to vote.")

})
And ('I log in as a Registered user',()=>{
    cy.get("input[name=login]").type(username);
    cy.get("input[name=password]").type('Test@12345');
    cy.get("button").contains("Login").click();

})
And ('Click on vote button and Number of votes has increased by one',()=>{
    cy.get('h4 > strong').then(($span) => {
        // capture what num is right now
        const num1 = parseFloat($span.text())
        cy.log(num1)
        cy.get('.btn').should('have.text', "Vote!").click();
        cy.wait(10000);
        cy.get('h4 > strong').then(($span) => {
             // now capture it again

            const num2 = parseFloat($span.text())
            cy.log(num2)
            // make sure it's what we expected
           expect(num2).to.eq(num1 + 1)
        })
    })
    
})
Then ('I get a thankyou message',()=>{
    cy.get('.card-text').should('have.text', "Thank you for your vote!")

})



