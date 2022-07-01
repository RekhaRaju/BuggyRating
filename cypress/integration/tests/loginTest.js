import HomePage from "../../support/PageObjects/HomePage";
import modelPage from "../../support/PageObjects/modelPage";
import PopularModelPage from "../../support/PageObjects/modelPage";
import RegistrationPage from "../../support/PageObjects/RegistrationPage";

describe('Login test', function () {
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const username = `testname${id}`
    const firstName = `firstname${id}`
    const password = 'Test@12345'
    it('Login To ', function () {
        HomePage.visithomePage();
         HomePage.loginAsExistingUser(rekha,'Test@12345');
         HomePage.profileVisibleOnLogin();
         HomePage.helloMessage(rekha);

        //cy.get('a').get('[href="/javascript:void(0)"]').should('have.text', "Logout");


    });
    it('Register User ', function () {
        HomePage.visithomePage();
       RegistrationPage.createNewUser(username, firstName, password);
       RegistrationPage.checkRegistrationSuccessMessage();
        RegistrationPage.clickCancel();
       HomePage.loginAsExistingUser(username, password);
       HomePage.helloMessage(firstName);


       
    });
    it.only('popularModel ', function () {
       HomePage.visithomePage();
       HomePage.clickPopularModel();
       HomePage.clickRegisterButton();
       RegistrationPage.createNewUser(username, firstName, password);
       HomePage.loginAsExistingUser(username, password);
       HomePage.clickPopularModel();

        modelPage.addtextInCommentBox();
       // modelPage.validateIncreaseInVoteCount();
        modelPage.thankYouMessageOnceVoted();


    });
   
    it('OverallRating', function () {
        HomePage.visithomePage();
        RegistrationPage.createNewUser(username, firstName, password);
        HomePage.loginAsExistingUser(username, password);
       
        HomePage.clickOverallRatingTile();

       
    });
    

});
