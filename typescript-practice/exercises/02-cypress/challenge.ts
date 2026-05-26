/// <reference types="cypress" />
/// <reference path="./chainable.d.ts" />

/**
 * Exercise 02: Cypress + TypeScript
 *
 * Complete each TODO, then run: npm run practice:check
 */

// --- Task 1: Fixture typing (cy.fixture('example')) ---
// Shape matches cypress/fixtures/example.json

const exampleFixture = {
  name: "Using fixtures to represent data",
  email: "hello@cypress.io",
  body: "Fixtures are a great way to mock data for responses to routes",
};

// TODO 1: Define interface ExampleFixture with name, email, body (all strings)
// const typedFixture: ExampleFixture = exampleFixture;

interface ExampleFixture {
  name: string;
  email: string;
  body: string;
}

const typedFixture: ExampleFixture = exampleFixture;

// --- Task 2: cy.request response typing ---
// Shape matches https://jsonplaceholder.typicode.com/users (subset of fields)

const sampleUser = {
  id: 1,
  name: "Leanne Graham",
  email: "Sincere@april.biz",
};

// TODO 2a: Define interface User with id (number), name (string), email (string)



// TODO 2b: Type assertUsersResponse so response is Cypress.Response<User[]>
function assertUsersResponse(response) {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.length.greaterThan(0);
  expect(response.body[0]).to.have.property("email");
}

// --- Task 3: cy.intercept route config ---
// TODO 3a: Define type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
// TODO 3b: Define interface RouteConfig { method, url, alias }

const usersRoute = {
  method: "GET",
  url: "**/users",
  alias: "getUsers",
};

// TODO 3c: Type usersRoute as RouteConfig
// const typedUsersRoute: RouteConfig = usersRoute;

// --- Task 4: Optional params (custom login command) ---
// TODO 4: Define interface LoginOptions { username, password, rememberMe? }

function buildLoginCommand(options) {
  const remember = options.rememberMe ?? false;
  return { username: options.username, password: options.password, remember };
}

// --- Task 5: Cypress.Commands.add (after chainable.d.ts task 6) ---
// Mirrors: Cypress.Commands.add('login', (username, password) => { ... })

export function registerGetByTestIdCommand() {
  Cypress.Commands.add("getByTestId", (testId) => {
    cy.get(`[data-testid="${testId}"]`);
  });
}

// --- Sanity checks (do not edit) ---
export { exampleFixture, sampleUser, assertUsersResponse, usersRoute, buildLoginCommand };
