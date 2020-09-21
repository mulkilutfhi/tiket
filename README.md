# Installation Cypress
1. Download NodeJS
```sh
https://nodejs.org/en/download/
```

2. Download Visual Studio Code
```sh
https://code.visualstudio.com/download
```

3. Download package.json in Visual studio code
```sh
npm init
```

4. Install cypress in Visual Studio Code
```sh
npm install cypress --save-dev
```

5. Open the file cypress in your document that has been cloned from Github 
```sh
https://github.com/mulkilutfhi/tiket
```
# How to Running BDD Testing
Install the plugin by running:

```sh
npm install --save-dev cypress-cucumber-preprocessor
```
# Cypress Configuration
Add it to your plugins:

```sh
cypress/plugins/index.js
```
```sh
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```
Add support for feature files to your Cypress configuration
```sh
cypress.json
```
```sh
{
  "testFiles": "**/*.feature"
}
```

### Configuration
Please make use of cosmiconfig to create a configuration for the plugin, for example, by adding this section to your package.json:
```sh
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```
### How to run the tests
Run your Cypress Launcher the way you would usually do, for example:
```sh
./node_modules/.bin/cypress open
```

