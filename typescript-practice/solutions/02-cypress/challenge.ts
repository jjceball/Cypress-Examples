/// <reference types="cypress" />
/// <reference path="./chainable.d.ts" />

const exampleFixture = {
  name: "Using fixtures to represent data",
  email: "hello@cypress.io",
  body: "Fixtures are a great way to mock data for responses to routes",
};

interface ExampleFixture {
  name: string;
  email: string;
  body: string;
}

const typedFixture: ExampleFixture = exampleFixture;

const sampleUser = {
  id: 1,
  name: "Leanne Graham",
  email: "Sincere@april.biz",
};

interface User {
  id: number;
  name: string;
  email: string;
}

function assertUsersResponse(response: Cypress.Response<User[]>) {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.length.greaterThan(0);
  expect(response.body[0]).to.have.property("email");
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RouteConfig {
  method: HttpMethod;
  url: string;
  alias: string;
}

const usersRoute: RouteConfig = {
  method: "GET",
  url: "**/users",
  alias: "getUsers",
};

interface LoginOptions {
  username: string;
  password: string;
  rememberMe?: boolean;
}

function buildLoginCommand(options: LoginOptions) {
  const remember = options.rememberMe ?? false;
  return { username: options.username, password: options.password, remember };
}

export function registerGetByTestIdCommand() {
  Cypress.Commands.add("getByTestId", (testId: string) => {
    cy.get(`[data-testid="${testId}"]`);
  });
}

export {
  exampleFixture,
  typedFixture,
  sampleUser,
  assertUsersResponse,
  usersRoute,
  buildLoginCommand,
};
