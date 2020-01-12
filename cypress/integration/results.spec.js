describe('Text Box with max characters', () => {
    it('displays the appropriate remaining character cound on the second input field on the page', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan');

        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

        cy.get('@charsLeftSpan')
            .then($charsLeftSpan => {
                expect($charsLeftSpan.text()).to.equal('15');
            });


        cy.get('@charInput').type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@charInput').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more characters once max has exceeded on the second input field on the page', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

        cy.get('@charInput').type('abcdefghijklmnopqrstuvwxyz');

        cy.get('@charInput')
            .should('have.attr', 'value', 'abcdefghijklmno')
    });
});
