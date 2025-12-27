# Tapestry Monorepo

A TypeScript-first monorepo built with **pnpm** and **Turborepo**, featuring cross-platform Expo apps (iOS/Android/Web), shared packages, and an API service.

## 📦 Project Structure

```
tapestry-monorepo/
├── apps/
│   ├── mobile/          # Expo app for iOS/Android/Web
│   └── web/             # Next.js web application
├── packages/
│   ├── config/          # Shared ESLint & TypeScript configs
│   ├── shared/          # Shared types and utilities
│   └── ui/              # Shared React Native UI components
├── services/
│   └── api/             # Express.js API service
└── package.json         # Root package with workspace scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

### Installation

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install all dependencies across the monorepo
pnpm install

# Set up git hooks
pnpm prepare
```

## 📱 Running Applications

### Mobile App (Expo)

```bash
# Start Expo development server
cd apps/mobile
pnpm start

# Run on iOS simulator
pnpm ios

# Run on Android emulator
pnpm android

# Run on web browser
pnpm web
```

### Web App (Next.js)

```bash
# Start Next.js development server
cd apps/web
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### API Service

```bash
# Start API development server
cd services/api
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🛠️ Development Commands

Run these commands from the **root directory** to execute across all workspaces:

```bash
# Run all apps/services in development mode
pnpm dev

# Build all packages and apps
pnpm build

# Lint all code
pnpm lint

# Format all code with Prettier
pnpm format

# Check formatting without modifying files
pnpm format:check

# Type-check all TypeScript code
pnpm type-check

# Clean all build artifacts and node_modules
pnpm clean
```

## 📦 Workspace Packages

### `@tapestry/config`

Shared configuration for ESLint and TypeScript across all workspaces.

- **eslint-base.js** - Base ESLint config
- **eslint-react.js** - React-specific ESLint config
- **tsconfig-react.json** - TypeScript config for React web
- **tsconfig-react-native.json** - TypeScript config for React Native

### `@tapestry/shared`

Shared TypeScript types and utility functions.

```typescript
import { User, ApiResponse, capitalize, formatDate } from '@tapestry/shared';
```

### `@tapestry/ui`

Shared React Native UI components that work across mobile and web.

```typescript
import { Button, Card } from '@tapestry/ui';
```

### `@tapestry/mobile`

Expo application using **expo-router** for file-based routing. Supports iOS, Android, and Web platforms.

### `@tapestry/web`

Next.js 14 web application with App Router, using shared packages for consistency.

### `@tapestry/api`

Express.js API service with TypeScript support.

## 🔧 Code Quality Tools

### ESLint

Configured with TypeScript and React support. Runs automatically on pre-commit via Husky.

```bash
pnpm lint
```

### Prettier

Configured for consistent code formatting.

```bash
pnpm format
```

### Husky + lint-staged

Git hooks automatically lint and format staged files before commit.

### TypeScript

Strict mode enabled with shared base configurations.

```bash
pnpm type-check
```

## 🏗️ Turborepo

This monorepo uses Turborepo for efficient task orchestration:

- **Caching**: Build outputs are cached for faster subsequent builds
- **Parallel execution**: Tasks run in parallel when possible
- **Dependency awareness**: Builds respect package dependencies

Configuration in `turbo.json`:

- `build` - Build packages in dependency order
- `dev` - Run development servers
- `lint` - Lint all code
- `type-check` - Type-check all TypeScript

## 📝 Adding a New Package

1. Create a new directory in `apps/`, `packages/`, or `services/`
2. Add a `package.json` with a scoped name (e.g., `@tapestry/new-package`)
3. Add workspace dependencies:
   ```json
   {
     "dependencies": {
       "@tapestry/shared": "workspace:*"
     }
   }
   ```
4. Run `pnpm install` from the root
5. Add appropriate scripts to `package.json`

## 🔗 Adding Dependencies

### To a specific workspace:

```bash
# Add to mobile app
pnpm --filter @tapestry/mobile add some-package

# Add dev dependency to shared package
pnpm --filter @tapestry/shared add -D some-package
```

### To all workspaces:

```bash
pnpm add -w some-package
```

## 🧪 Testing

Individual packages can include their own test setup. Follow existing patterns in the codebase.

## 📚 Key Technologies

- **TypeScript** - Type-safe JavaScript
- **pnpm** - Fast, disk space efficient package manager
- **Turborepo** - High-performance build system
- **Expo** - Cross-platform mobile development
- **Next.js** - React framework for web
- **Express** - Minimal Node.js web framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

## 📄 License

Private monorepo.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm lint` and `pnpm type-check`
4. Commit your changes (hooks will auto-lint)
5. Push and create a pull request

---

Built with ❤️ using modern TypeScript tooling.