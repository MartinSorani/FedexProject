# Assesment Solution

## Update to Node 16
_"We have left the angular + cypress builder configuration empty in angular.json file, we'll leave it to you to update it"_
This project contains a hard dependency on cypress schematics, which no longer support Angular <= 13, so the project has been updated for usage with Node 16 and Angular 14 (latest versions as of now). TSLint is also deprecated so it has been removed; linting is now covered with ESLint.

## Karma config update
Original Karma config did not take into account already running instances or launches. Although the assesment does not require a unit testing framework or unit tests at all, Karma config has been updated for the sake of compliance patterns.

## Cypress e2e