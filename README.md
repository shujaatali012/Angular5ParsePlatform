# Angular5ParsePlatform

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

Application will connect to parse platform for backend calls. Angular 5 is used to develop the application and Bootstrap 4 is used for responsive frontend, 

**Features**

- New user registration
- Upload profile picture while register new user (need modifications to show profile picture)
- Login
- Product page (not complete, just simple design)
- Logout
- Password reset functionality
- View profile
- Authentication guard implementation to access restricted routes 
- Account management is done through Parse Service

### Configurations
Set values on environment.json to configure parse platform:

`SERVER_URL: '<YOUR-SERVER_URL>',`
`PARSE_APP_ID: '<YOUR-PARSE_APP_ID>',`
`PARSE_CLIENT_KEY: '<YOUR-PARSE_CLIENT_KEY>'`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).