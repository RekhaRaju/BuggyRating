export class HomePage {
    static loginButton = '["Login"]';
    static visithomePage(){
        cy.visit("https://buggy.justtestit.org/");
    }

    static loginAsExistingUser(name, password) {
        cy.get("input[name=login]").type(name);
        cy.get("input[name=password]").type(password);
        cy.get("button").contains("Login").click();
        cy.wait(2000);  
    }
  
    static profileVisibleOnLogin(){
        cy.get('[href="/profile"]').should('have.text', "Profile");

    }
    static helloMessage(username){
        cy.get('.nav-link').first().should('have.text', "Hi, " + username);

    }
    static clickRegisterButton(){
        cy.get('[href="/register"]').should('have.text', "Register").click();
    }
    static clickOverallRatingTile(){
        cy.get(':nth-child(3) > .card').contains("Overall Rating").should('be.visible');
        cy.get(':nth-child(3) > .card > a > .img-fluid').should('be.visible').click();
        cy.get(':nth-child(2) > :nth-child(3) > a').click();
    }
    static clickPopularModel(){
        cy.get(':nth-child(2) > .card').contains("Popular Model").should('be.visible');
        cy.get(':nth-child(2) > .card > a > .img-fluid').should('be.visible').click();
        cy.wait(2000);

    }

}
export default HomePage;
