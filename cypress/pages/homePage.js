class homePage {
    visit() {
        cy.visit('/');
    }

    getSearchBox() {
        return cy.get('[data-cy="txtQuery"]');
    }

    inputSearchTerm(term) {
        this.getSearchBox().clear().type(term);
    }

    clearSearchBox() {
        this.getSearchBox().clear();
    }

    clickSearchButton() {
        cy.get('[data-cy="btnSearch"]').click();
    }

    sendEnterKey() {
        this.getSearchBox().type('{enter}');
    }

    selectPeople() {
        cy.get('[data-cy="rdbPeople"]').check();
    }

    selectPlanet() {
        cy.get('[data-cy="rdbPlanets"]').check();
    }

    getHeader() {
        return cy.get('[data-cy="lblHeader"]');
    }

    getPeopleResult() {
        return cy.get('div[data-cy="lblPeopleResult"]');
    }

    getPlanetResult() {
        return cy.get('div[data-cy="lblPlanetResult"]');
    }

    getNullResult() {
        return cy.get('[data-cy="lblNotFound"]');
    }

    searchFor(term) {
        this.inputSearchTerm(term);
        this.clickSearchButton();
    }
}
module.exports = new homePage();