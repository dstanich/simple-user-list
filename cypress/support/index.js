// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// 'fetch' intercepting is not available yet in Cypress.
// This imports a polyfill and deletes the browser support to force the polyfill.
// https://github.com/cypress-io/cypress/issues/95
// https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__window-fetch/cypress/integration/polyfill-fetch-from-tests-spec.js
fetchPolyfill();
function fetchPolyfill() {
  let polyfill;

  before(() => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';
    cy.request(polyfillUrl).then(response => {
      polyfill = response.body;
    });
  });

  Cypress.on('window:before:load', win => {
    delete win.fetch;
    // since the application code does not ship with a polyfill
    // load a polyfilled "fetch" from the test
    win.eval(polyfill);
    win.fetch = win.unfetch;
  });
}
