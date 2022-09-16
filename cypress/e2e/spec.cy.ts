import homePage from '../pages/homePage';

describe('Search feature tests', () => {

  beforeEach(() => {
    homePage.visit();
  })

  it('Should contain header Star Wars', () => {
    homePage.getHeader().contains('Star Wars');
  });

  it('Should return people result', () => {
    homePage.selectPeople();
    homePage.searchFor('C-3PO');
    homePage.getPeopleResult().should('exist');
    homePage.getPeopleResult().should('have.length', 1);
  });

  it('Should return planet result', () => {
    homePage.selectPlanet();
    homePage.searchFor('Tatooine');
    homePage.getPlanetResult().should('exist');
  });

  it('Should be able to search using the enter key', () => {
    homePage.selectPeople();
    homePage.inputSearchTerm('Leia');
    homePage.sendEnterKey();
    homePage.getPeopleResult().should('exist');
  })

  it('Should yield several results', () => {
    homePage.selectPeople();
    homePage.searchFor('Skywalker');
    homePage.getPeopleResult().its('length').should('be.gte', 1);
  })

  it('Should not find anything', () => {
    homePage.selectPeople();
    homePage.searchFor('something');
    homePage.getPeopleResult().should('not.exist');
    homePage.getNullResult().should('exist');
  })

  it('Should display not found message', () => {
    homePage.selectPlanet();
    homePage.searchFor('Alderaan');
    homePage.getPlanetResult().should('exist');
    homePage.selectPeople();
    homePage.clickSearchButton();
    homePage.getNullResult().should('have.text', 'Not found.');
  })

  it('Should remove previous search results', () => {
    homePage.selectPeople();
    homePage.searchFor('Lars');
    homePage.getPeopleResult().its('length').should('be.gte', 1);
    homePage.clearSearchBox();
    homePage.clickSearchButton();
    homePage.getPeopleResult().should('not.exist');
  })
});
