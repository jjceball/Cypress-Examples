# Cypress-Examples

A comprehensive collection of Cypress end-to-end testing examples and demonstrations, featuring both JavaScript and TypeScript implementations with real-world testing scenarios.

## 🚀 Project Overview

This repository serves as a learning resource and reference for Cypress testing, showcasing various testing patterns, best practices, and advanced features. It includes both beginner-friendly examples and advanced testing scenarios.

## 📁 Project Structure

```
cypress-Examples/
├── cypress/
│   ├── e2e/                           # End-to-end test files
│   │   ├── 1-getting-started/         # Basic Cypress examples
│   │   │   └── todo.cy.js
│   │   ├── 2-advanced-examples/       # Advanced Cypress features
│   │   │   ├── actions.cy.js
│   │   │   ├── aliasing.cy.js
│   │   │   ├── assertions.cy.js
│   │   │   ├── connectors.cy.js
│   │   │   ├── cookies.cy.js
│   │   │   ├── cypress_api.cy.js
│   │   │   ├── files.cy.js
│   │   │   ├── location.cy.js
│   │   │   ├── misc.cy.js
│   │   │   ├── navigation.cy.js
│   │   │   ├── network_requests.cy.js
│   │   │   ├── querying.cy.js
│   │   │   ├── spies_stubs_clocks.cy.js
│   │   │   ├── storage.cy.js
│   │   │   ├── traversal.cy.js
│   │   │   ├── utilities.cy.js
│   │   │   ├── viewport.cy.js
│   │   │   ├── waiting.cy.js
│   │   │   └── window.cy.js
│   │   ├── fundamentals.cy.ts         # Core testing fundamentals (TypeScript)
│   │   ├── github-validation.cy.ts    # Real-world GitHub profile testing
│   │   └── typescript-example.cy.ts   # TypeScript-specific examples
│   ├── fixtures/                      # Test data files
│   │   └── example.json
│   └── support/                       # Support files and custom commands
│       ├── commands.js
│       ├── component-index.html
│       ├── component.js
│       ├── e2e.js
│       ├── index.d.ts
├── my-vite-app/                       # Sample React app for testing
│   ├── src/
│   └── ...
├── cypress.config.ts                  # Cypress configuration
├── package.json                       # Project dependencies and scripts
└── tsconfig.json                      # TypeScript configuration
```

## 🧪 Test Categories

### 1. Getting Started (`1-getting-started/`)
- **todo.cy.js**: Basic Cypress test demonstrating fundamental concepts

### 2. Advanced Examples (`2-advanced-examples/`)
Comprehensive examples covering:
- **Actions**: User interactions (click, type, select, etc.)
- **Aliasing**: Element and request aliasing patterns
- **Assertions**: Various assertion types and best practices
- **Connectors**: Connecting commands and assertions
- **Cookies**: Cookie manipulation and testing
- **Cypress API**: Direct Cypress API usage
- **Files**: File upload/download testing
- **Location**: URL and navigation testing
- **Network Requests**: API testing and mocking
- **Querying**: Element selection strategies
- **Spies, Stubs & Clocks**: Advanced mocking techniques
- **Storage**: Local and session storage testing
- **Traversal**: DOM traversal methods
- **Utilities**: Utility functions and helpers
- **Viewport**: Responsive testing
- **Waiting**: Smart waiting strategies
- **Window**: Browser window manipulation

### 3. Custom Test Suites
- **fundamentals.cy.ts**: Core testing patterns with TypeScript
- **github-validation.cy.ts**: Real-world testing of GitHub profile pages
- **typescript-example.cy.ts**: TypeScript-specific testing examples

## 🛠️ Technologies Used

- **Cypress**: ^15.2.0 - Modern testing framework
- **TypeScript**: ^5.9.2 - Type-safe JavaScript
- **React**: ^19.1.1 - Frontend framework (for component testing)
- **Vite**: ^7.1.7 - Fast build tool
- **Node.js**: ^24.5.2 - Runtime environment

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd Cypress-Examples

# Install dependencies
npm install
```

### Running Tests

```bash
# Open Cypress Test Runner (Interactive Mode)
npm run cypress:open

# Run all tests in headless mode
npm run cypress:run

# Run tests in specific browsers
npm run cypress:run:chrome
npm run cypress:run:firefox
npm run cypress:run:edge

# Run tests (alias for cypress:run)
npm test
```

## 📋 Test Examples

### Basic Test Structure
```typescript
describe('Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://example.com')
  })

  it('should perform an action', () => {
    cy.get('.selector').click()
    cy.url().should('include', 'expected-path')
  })
})
```

### API Testing
```typescript
it('should retrieve data from API', () => {
  cy.request('GET', 'https://api.example.com/users')
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
    })
})
```

### Custom Commands
```typescript
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('#login').click()
})
```

## 🎯 Key Features Demonstrated

- **TypeScript Integration**: Full TypeScript support with type safety
- **Real-world Testing**: GitHub profile validation examples
- **API Testing**: REST API testing patterns
- **Custom Commands**: Reusable test commands
- **Advanced Selectors**: Complex element selection strategies
- **Mocking & Stubbing**: Network request interception
- **File Operations**: Upload and download testing
- **Cross-browser Testing**: Multi-browser support
- **Component Testing**: React component testing setup

## 📚 Learning Resources

This repository complements the official Cypress documentation and provides practical examples for:
- Beginners learning Cypress fundamentals
- Intermediate developers exploring advanced features
- Teams implementing TypeScript in their test suites
- Developers needing real-world testing examples

## 🤝 Contributing

Feel free to contribute by:
- Adding new test examples
- Improving existing tests
- Adding documentation
- Fixing issues or bugs

## 📄 License

ISC License - see package.json for details