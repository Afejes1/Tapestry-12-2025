# Tapestry Monorepo - Setup Guide

This guide provides detailed instructions for setting up and working with the Tapestry TypeScript monorepo.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Running Applications](#running-applications)
6. [Package Management](#package-management)
7. [Code Quality](#code-quality)
8. [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **pnpm** >= 8.0.0
- **Git**

### Installing pnpm

```bash
npm install -g pnpm@8.15.1
```

Verify installation:

```bash
pnpm --version
# Should output: 8.15.1
```

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Afejes1/Tapestry-12-2025.git
cd Tapestry-12-2025
```

### 2. Install Dependencies

This will install all dependencies across all workspaces:

```bash
pnpm install
```

The install process will:

- Install root-level dependencies (Turbo, ESLint, Prettier, etc.)
- Install dependencies for all workspace packages
- Set up Husky git hooks automatically

### 3. Build All Packages

Build all packages in the correct dependency order:

```bash
pnpm build
```

This uses Turborepo to build packages efficiently with caching.

## Project Structure

```
tapestry-monorepo/
├── .husky/                  # Git hooks configuration
├── apps/
│   ├── mobile/              # Expo mobile app (iOS/Android/Web)
│   │   ├── app/             # Expo Router pages
│   │   ├── assets/          # Static assets
│   │   ├── app.json         # Expo configuration
│   │   └── package.json
│   └── web/                 # Next.js web application
│       ├── src/
│       │   └── app/         # App Router pages
│       ├── next.config.js
│       └── package.json
├── packages/
│   ├── config/              # Shared ESLint & TypeScript configs
│   │   ├── eslint-base.js
│   │   ├── eslint-react.js
│   │   ├── tsconfig-react.json
│   │   └── tsconfig-react-native.json
│   ├── shared/              # Shared types and utilities
│   │   └── src/
│   │       ├── types.ts
│   │       ├── utils.ts
│   │       └── index.ts
│   └── ui/                  # Shared React Native UI components
│       └── src/
│           ├── components/
│           └── index.ts
├── services/
│   └── api/                 # Express.js API service
│       └── src/
│           └── index.ts
├── .eslintrc.js             # Root ESLint config
├── .prettierrc              # Prettier config
├── .lintstagedrc.json       # lint-staged config
├── pnpm-workspace.yaml      # pnpm workspace configuration
├── turbo.json               # Turborepo configuration
├── tsconfig.json            # Base TypeScript config
└── package.json             # Root package.json
```

## Development Workflow

### Running All Apps in Development Mode

```bash
pnpm dev
```

This starts all development servers concurrently.

### Working on Individual Packages

#### Mobile App (Expo)

```bash
cd apps/mobile
pnpm start        # Start Expo dev server
pnpm ios          # Run on iOS simulator
pnpm android      # Run on Android emulator
pnpm web          # Run in web browser
```

#### Web App (Next.js)

```bash
cd apps/web
pnpm dev          # Start Next.js dev server (http://localhost:3000)
```

#### API Service

```bash
cd services/api
pnpm dev          # Start API server (http://localhost:3001)
```

### Making Changes

1. **Create a feature branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the appropriate workspace

3. **Lint and type-check**:

   ```bash
   pnpm lint
   pnpm type-check
   ```

4. **Commit your changes**:

   ```bash
   git add .
   git commit -m "Description of changes"
   ```

   Note: Husky will automatically run lint-staged before the commit.

5. **Push and create PR**:
   ```bash
   git push origin feature/your-feature-name
   ```

## Running Applications

### Mobile App Development

The mobile app uses Expo Router for file-based routing.

**Prerequisites for mobile development**:

- For iOS: Xcode and iOS Simulator (macOS only)
- For Android: Android Studio and Android Emulator

**Start development server**:

```bash
cd apps/mobile
pnpm start
```

Then press:

- `i` - Open in iOS simulator
- `a` - Open in Android emulator
- `w` - Open in web browser

### Web App Development

```bash
cd apps/web
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### API Service Development

```bash
cd services/api
pnpm dev
```

API endpoints:

- Health check: [http://localhost:3001/api/health](http://localhost:3001/api/health)
- Users: [http://localhost:3001/api/users](http://localhost:3001/api/users)

## Package Management

### Adding a Dependency

**To a specific workspace**:

```bash
# Add to mobile app
pnpm --filter @tapestry/mobile add package-name

# Add dev dependency to shared package
pnpm --filter @tapestry/shared add -D package-name
```

**To all workspaces**:

```bash
pnpm add -w package-name
```

**To root only**:

```bash
pnpm add -D -w package-name
```

### Removing a Dependency

```bash
pnpm --filter @tapestry/mobile remove package-name
```

### Using Workspace Dependencies

In any package.json, reference workspace packages using:

```json
{
  "dependencies": {
    "@tapestry/shared": "workspace:*",
    "@tapestry/ui": "workspace:*"
  }
}
```

### Creating a New Package

1. Create directory in `apps/`, `packages/`, or `services/`:

   ```bash
   mkdir packages/new-package
   cd packages/new-package
   ```

2. Create `package.json`:

   ```json
   {
     "name": "@tapestry/new-package",
     "version": "1.0.0",
     "private": true,
     "main": "dist/index.js",
     "types": "dist/index.d.ts",
     "scripts": {
       "build": "tsc",
       "dev": "tsc --watch",
       "lint": "eslint src --ext .ts",
       "type-check": "tsc --noEmit"
     },
     "dependencies": {
       "@tapestry/shared": "workspace:*"
     },
     "devDependencies": {
       "@tapestry/config": "workspace:*",
       "typescript": "^5.3.3"
     }
   }
   ```

3. Create `tsconfig.json`:

   ```json
   {
     "extends": "../../tsconfig.json",
     "compilerOptions": {
       "outDir": "./dist",
       "rootDir": "./src",
       "composite": true,
       "noEmit": false
     },
     "include": ["src"],
     "exclude": ["node_modules", "dist"]
   }
   ```

4. Run `pnpm install` from root

## Code Quality

### Linting

Lint all code:

```bash
pnpm lint
```

Lint with auto-fix:

```bash
pnpm --filter @tapestry/web lint --fix
```

### Formatting

Format all code:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

### Type Checking

Type-check all packages:

```bash
pnpm type-check
```

### Pre-commit Hooks

Husky and lint-staged are configured to automatically:

1. Lint changed files
2. Format changed files
3. Run type checking

This happens automatically when you commit. To bypass (not recommended):

```bash
git commit --no-verify
```

## Turborepo Features

### Caching

Turborepo caches task outputs. Once a task runs, subsequent runs with the same inputs will use cached results.

**Clear cache**:

```bash
rm -rf .turbo
```

### Parallel Execution

Turborepo runs tasks in parallel when possible, respecting dependency order.

### Pipeline Configuration

Tasks are configured in `turbo.json`:

- `build` - Builds with dependencies
- `lint` - Lints code
- `type-check` - Type checks
- `dev` - Development servers

## Troubleshooting

### Common Issues

#### Issue: "Command not found: pnpm"

**Solution**: Install pnpm globally:

```bash
npm install -g pnpm@8.15.1
```

#### Issue: Dependency installation fails

**Solution**: Clear cache and reinstall:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### Issue: Build fails with TypeScript errors

**Solution**:

1. Ensure all workspace dependencies are built:
   ```bash
   pnpm build
   ```
2. Clear TypeScript build cache:
   ```bash
   find . -name "*.tsbuildinfo" -delete
   pnpm build
   ```

#### Issue: Expo app won't start

**Solution**:

1. Clear Expo cache:
   ```bash
   cd apps/mobile
   rm -rf .expo node_modules
   pnpm install
   ```

#### Issue: Next.js build fails

**Solution**:

1. Clear Next.js cache:
   ```bash
   cd apps/web
   rm -rf .next
   pnpm build
   ```

#### Issue: Git hooks not running

**Solution**: Reinstall Husky:

```bash
pnpm prepare
```

### Getting Help

1. Check the main [README.md](README.md)
2. Review workspace-specific package.json for scripts
3. Check Turborepo logs in `.turbo/` directory
4. Review error messages carefully - they often contain solutions

## Best Practices

### Code Organization

- Keep shared types in `@tapestry/shared`
- Keep UI components in `@tapestry/ui`
- Use absolute imports for workspace packages
- Follow the existing directory structure

### Commit Messages

Follow conventional commit format:

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update dependencies
```

### TypeScript

- Enable strict mode
- Use interfaces for object shapes
- Export types from shared packages
- Avoid using `any` - use `unknown` if type is truly unknown

### React/React Native

- Use functional components with hooks
- Follow React best practices
- Use TypeScript for prop types (not PropTypes)
- Keep components small and focused

### Git Workflow

1. Pull latest changes: `git pull`
2. Create feature branch: `git checkout -b feature/name`
3. Make changes and commit frequently
4. Push and create PR
5. Request review
6. Merge after approval

## Commands Reference

### Root Commands

| Command             | Description               |
| ------------------- | ------------------------- |
| `pnpm install`      | Install all dependencies  |
| `pnpm build`        | Build all packages        |
| `pnpm dev`          | Start all dev servers     |
| `pnpm lint`         | Lint all code             |
| `pnpm format`       | Format all code           |
| `pnpm format:check` | Check code formatting     |
| `pnpm type-check`   | Type-check all code       |
| `pnpm clean`        | Clean all build artifacts |

### Workspace-specific Commands

Use `--filter` to run commands in specific workspaces:

```bash
# Build specific package
pnpm --filter @tapestry/shared build

# Run dev server for web
pnpm --filter @tapestry/web dev

# Add dependency to mobile
pnpm --filter @tapestry/mobile add package-name
```

### Turbo Commands

```bash
# Run with verbose logging
pnpm build --verbose

# Run without cache
pnpm build --force

# See what Turbo would do
pnpm build --dry-run
```

## Next Steps

1. Explore the codebase
2. Read through example components in `packages/ui`
3. Try running the mobile and web apps
4. Make a small change and commit it
5. Create your first feature!

## Additional Resources

- [pnpm Documentation](https://pnpm.io/)
- [Turborepo Documentation](https://turbo.build/repo)
- [Expo Documentation](https://docs.expo.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
