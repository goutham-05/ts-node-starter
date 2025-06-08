# ts-node-starter

[![Sponsor][sponsor-badge]][sponsor]
[![TypeScript version][ts-badge]][typescript-5-7]
[![Node.js version][nodejs-badge]][nodejs]
[![MIT][license-badge]][license]

A modern, ready-to-use Node.js project template with TypeScript, ESM, linting, formatting, and fast testing out of the box. Ideal for quickly starting robust, maintainable Node.js applications.

- **TypeScript 5.7+** with strict settings
- **ES Modules** (ESM) support
- **ESLint** and **Prettier** preconfigured
- **Vitest** for fast unit testing and coverage
- **EditorConfig** and reproducible environments with **Volta**
- Example GitHub Actions workflow
- Simple example code and test

Licensed under the MIT.

🤲 Free as in speech: available under the MIT license.

## Getting Started

This project is designed for the latest Active LTS release of [Node.js][nodejs].

## Project Structure

```
project-root/
├── src/
│   ├── index.ts                 # Entry point – starts server
│   ├── app.ts                   # Express app setup
│   ├── api/
│   │   ├── routes/
│   │   │   └── user.ts          # User routes
│   │   └── controllers/
│   │       └── userController.ts
│   ├── config/
│   │   └── env.ts               # Environment config
│   ├── middlewares/
│   │   └── errorHandler.ts      # Error middleware
│   ├── services/
│   │   └── userService.ts       # Example service logic
│   └── types/
│       └── index.d.ts           # Optional global types
├── .env                         # Environment variables
├── tsconfig.json                # Your updated TypeScript config
├── package.json                 # Now with "type": "commonjs"
├── tsup.config.ts              # (optional) if using tsup
├── README.md            # Project documentation
└── LICENSE              # License file
```

### 1. Use as a Repository Template

Click the **[Use this template][repo-template-action]** button on GitHub to create a new repository based on this boilerplate. Add your code in the `src` directory and your tests in the `__tests__` directory.

### 2. Clone the Repository

Clone and set up the project locally:

```sh
git clone https://github.com/goutham-05/ts-node-starter
cd ts-node-starter
npm install
```
### 3. Install Volta (Recommended)
Install [Volta][volta] to manage your Node.js version and project dependencies. This ensures that your development environment is consistent across different machines.

```sh
curl https://get.volta.sh | bash
```
### 4. Install Dependencies
Run the following command to install all dependencies:

```sh
npm install
```
### 5. Run the Project
To start the project, run:

```sh
npm run build:watch
```
This will start the TypeScript compiler in watch mode, automatically transpiling your code as you make changes.
### 6. Run Tests
To run the tests, use:

```sh
npm run test
```
### 7. Lint and Format Code
To lint your code, run:

```sh
npm run lint
```
To format your code with Prettier, run:

```sh
npm run prettier
```

## Available Scripts

You can use the following npm scripts to manage and develop your project:
- `dev` — Start the project in development mode with automatic transpilation.
- `clean` — Remove coverage data, cache, and transpiled files.
- `prebuild` — Lint source files and tests before building.
- `build` — Transpile TypeScript to ES6.
- `build:watch` — Watch mode to automatically transpile source files on changes.
- `lint` — Lint source files and tests.
- `prettier` — Reformat files using Prettier.
- `test` — Run all tests.
- `test:watch` — Watch mode to automatically re-run tests on changes.
- `test:coverage` — Run tests and print out test coverage.

## Additional Information

### Why include Volta?

It is recommended to [install][volta-getting-started] Volta and use it to manage your project's toolchain.

[Volta][volta] ensures that the tools you use always match the settings of the project you’re working on. This means you don’t have to worry about changing the state of your installed software when switching between projects. For example, it's [used by engineers at LinkedIn][volta-tomdale] to standardize tools and provide reproducible development environments.

### Why Vitest instead of Jest?

[Vitest][vitest] is recommended for unit and integration testing of your TypeScript code.

Since 2023, many teams have switched from Jest to Vitest. Vitest is generally faster than Jest, especially for large test suites. It has native support for ES modules, is easier to configure, and offers a better developer experience with TypeScript—especially when working with mocks, spies, and types.

However, the choice of testing tools should always depend on your project's specific requirements.

### ES Modules

This template uses native [ESM][esm]. Make sure to read [this][nodejs-esm] and [this][ts47-esm] for more information.

If your project requires CommonJS, you will need to [convert to ESM][sindresorhus-esm].

> **Note:** Please do not open issues for questions regarding CommonJS or ESM on this repo.

## Backers & Sponsors

Support this project by becoming a [sponsor][sponsor].

## License

Licensed under the MIT. See the [LICENSE](https://github.com/goutham-05/ts-node-starter/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-5.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js-22-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v22.x/docs/api/
[gha-ci]: https://github.com/goutham-05/node-typescript-boilerplate/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-5-7]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-7/
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/goutham-05/ts-node-starter/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/goutham-05
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467
[gh-actions]: https://github.com/features/actions
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs
[editorconfig]: https://editorconfig.org
[vitest]: https://vitest.dev
