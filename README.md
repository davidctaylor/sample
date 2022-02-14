# Address Boolean

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

Run `npm install` to install the projects libraries.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Summary

Created two routes that list and display address book entries.

The list page provides a simple list of address book entries, currently limited to 3. Clicking an address book entry takes the user to a detail page passing the selected data as a route property

The list page will display an error in the event of a API call error.

The detail page will display a message if an book entry not provided.

## Potential updates
Update to lazily load routes

Provide service for handling API requests

Create common display component for address book entry 

By default the API returns a single entry. This could be expanded to accept a user input application configuration injected into the component;

The unit tests are incomplete and just instantiate the the list and detail components; To complete would require mock API services and click handlers.

