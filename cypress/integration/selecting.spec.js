describe('Text Box with max characters', () => {
    it('displays the appropriate remaining character cound on the second input field on the page', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]').type('hello');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-last-name"]').type(' my friend');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more characters once max has exceeded on the second input field on the page', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]').type('abcdefghijklmnopqrstuvwxyz');

        cy.get('[data-cy="input-last-name"]')
            .should('have.attr', 'value', 'abcdefghijklmno')
    });
});
