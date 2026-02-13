# Contributing to get-internal-type

Thank you for your interest in contributing to this project!

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/<YOUR-USERNAME>/get-internal-type.git
cd get-internal-type
```

2. Install dependencies:
```bash
npm install
```

## Development

### Building

Build the project:
```bash
npm run build
```

Watch mode for development:
```bash
npm run watch
```

### Testing

Run tests:
```bash
npm test
```

### Linting & Formatting

Run the linter:
```bash
npm run lint
```

Auto-fix lint issues:
```bash
npm run lint:fix
```

Format source code:
```bash
npm run format
```

### Project Structure

```
get-internal-type/
├── src/
│   └── get-internal-type.ts  # Main library source code
├── tests/
│   └── getobjecttype.test.ts # Test suite
├── dist/                      # Built output (CJS, ESM, UMD)
├── package.json
├── tsconfig.json
└── rollup.config.mjs
```

## Making Changes

1. Create a new branch for your feature or fix:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes

3. Ensure lint passes:
```bash
npm run lint
```

4. Ensure tests pass:
```bash
npm test
```

5. Ensure the build succeeds:
```bash
npm run build
```

6. Commit your changes with a descriptive message in present tense

7. Push to your fork and submit a Pull Request

## Code Style

- Use TypeScript for all source code
- Follow existing code patterns
- Keep code minimal and focused
- Add tests for new functionality
- ESLint and Prettier are configured — run `npm run lint:fix` before committing

## Reporting Issues

When reporting issues, please include:

- Node.js version
- npm version
- Steps to reproduce
- Expected vs actual behavior

## License

By contributing, you agree that your contributions will be licensed under the Apache-2.0 License.
