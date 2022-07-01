class modelPage {
    
    static toVote(){
        cy.get('.btn').should('have.text', "Vote!").click();
        cy.wait(2000);

    }

    static thankYouMessageOnceVoted(){
        cy.get('.card-text').should('have.text', "Thank you for your vote!");

    }
    static addtextInCommentBox(){
        cy.get('#comment').should('be.visible').type("Very nice car model");

    }
    static validateIncreaseInVoteCount(){
        cy.get('h4 > strong').then(($span) => {
            // capture what num is right now
            const num1 = parseFloat($span.text())
            cy.log(num1)
            modelPage.toVote().then(() => {
                // now capture it again
                const num2 = parseFloat($span.text())
                cy.log(num2)
                // make sure it's what we expected
                expect(num2).to.eq(num1 + 1)
            })
        })
    }

}
export default modelPage;