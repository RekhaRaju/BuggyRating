import HomePage from "./HomePage";

class RegistrationPage {
    elements = {
        loginField: ()=> cy.get('username'),
        firstNameField: ()=> cy.get('firstName'),
        lastNameField: ()=> cy.get('lastName'),
        passwordField: ()=> cy.get('password'),
        confirmPasswordField: ()=> cy.get('confirmPassowrd'),        
        register: ()=>cy.get("button").contains("Register"),
        cancel: ()=>cy.get("button").contains("Cancel"),

    }
    static createNewUser(username, firstName, password){
        cy.url().should('eq', 'https://buggy.justtestit.org/register')
        cy.get('#username').type(username);
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type('xyz');
        cy.get('#password').type(password);
        cy.get('#confirmPassword').type(password);
        cy.get('.btn-default').contains("Register").click()
        cy.wait(2000);
       
    }
    static checkRegistrationSuccessMessage(){
        cy.get('.result').contains("Registration is successful").should('be.visible');

    }
    static clickCancel(){
        cy.get('.col-md-6 > form > a.btn').should('have.text', "Cancel").click();
        cy.url().should('eq', 'https://buggy.justtestit.org/')
    }
    

}
export default RegistrationPage;
