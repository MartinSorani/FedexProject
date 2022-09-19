# FedEx Frontend QA - Javascript Test Assessment

# Read the ASSESSMENT

The assessment information is located in the file: [ASSESSMENT.MD](./ASSESSMENT.MD)

# NodeJS version

Currently the project works with **NODEJS 16 LTS** environment. Please make sure you MAC/PC has a 16.x node version installed. (https://nodejs.org/dist/latest-v16.x/).

Run ```node -v``` in a terminal to see which version of NodeJS you have

# cypress

You need to install cypress in the project: ```npm install cypress```

Note: __We do not accept assessments that are completed with a framework other than cypress__

# App specs

Welcome to our Star Wars Search web application. Our app is for the Star Wars enthusiasts who would like to find some information for some of their favorite characters and planets.

The application is in this repository in the `src` folder. **Feel free to browse or modify the code if you need to.**

So, what you should expect when using this app are the following:

## Main features

### Search for character (person)
*	When you search for **a character** and it’s a valid one, then you should be able to see his / her “Gender”, “Birth year”, “Eye color” and “Skin color”.
*	When you search for a character and it’s not a valid one, then you should be able to see “Not found” in the results.

### Search for planet
*	When you search for **a planet** and it’s a valid one, then you should be able to see its “Population”, “Climate” and “Gravity”.
*	When you search for a planet and it’s not a valid one, then you should be able to see “Not found” in the results.

### Additional flows
*	When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed).
*	You can search for results by clicking the “Search” button or by pressing “enter” on the search field.
*	When for example you have searched for a full planet name and you’ve got results, if you switch to People and search for the same thing (that has no matching people based on a partial name), you should get a “Not found” in the results.
*	You can have more than one results, for both Planets and Names (partial matching)

## Requirements
* **NodeJS 16**
* Chrome browser
* Tested on Windows 10

## Installation

```
npm install
```

## Run

Run `ng serve` and navigate to `http://localhost:4200/`.
You can search by people and planets there.
To search by people use `Luke Skywalker`, `Leia Organa` or `r2`. Use `Darth` to see multiple results.
To search by search by planets use `Alderaan`, `Hoth`.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` or `npm run e2e` or `npx cypress` to execute the end-to-end tests via [cypress](https://github.com/cypress-io/cypress/tree/develop/npm/cypress-schematic).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Backend service that is used
The actual backend we're hitting is [SWAPI (Star Wars API)](https://swapi.dev/documentation)
