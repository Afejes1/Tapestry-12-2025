# Quick Command Reference

This is a quick reference for commonly used commands in the Tapestry monorepo.

## 🚀 Getting Started

```bash
# Install pnpm globally
npm install -g pnpm@8.15.1

# Clone repository
git clone https://github.com/Afejes1/Tapestry-12-2025.git
cd Tapestry-12-2025

# Install all dependencies
pnpm install

# Build all packages
pnpm build
```

## 📦 Root-Level Commands

These commands run from the root directory and affect all workspaces:

```bash
# Development
pnpm dev              # Start all development servers
pnpm build            # Build all packages
pnpm clean            # Clean all build artifacts

# Code Quality
pnpm lint             # Lint all code
pnpm format           # Format all code with Prettier
pnpm format:check     # Check if code is formatted
pnpm type-check       # Type-check all TypeScript
```

## 📱 Mobile App Commands

```bash
cd apps/mobile

# Development
pnpm start            # Start Expo dev server
pnpm ios              # Run on iOS simulator
pnpm android          # Run on Android emulator
pnpm web              # Run in web browser

# Code Quality
pnpm lint             # Lint mobile code
pnpm type-check       # Type-check mobile code
```

## 🌐 Web App Commands

```bash
cd apps/web

# Development
pnpm dev              # Start Next.js dev server (localhost:3000)
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Lint web code
pnpm type-check       # Type-check web code
```

## 🔌 API Service Commands

```bash
cd services/api

# Development
pnpm dev              # Start API dev server (localhost:3001)
pnpm build            # Build API
pnpm start            # Start production API

# Code Quality
pnpm lint             # Lint API code
pnpm type-check       # Type-check API code
```

## 📦 Package Commands

### Shared Package

```bash
cd packages/shared

pnpm build            # Build shared package
pnpm dev              # Watch and rebuild on changes
pnpm lint             # Lint shared code
pnpm type-check       # Type-check shared code
pnpm clean            # Clean build artifacts
```

### UI Package

```bash
cd packages/ui

pnpm build            # Build UI components
pnpm dev              # Watch and rebuild on changes
pnpm lint             # Lint UI code
pnpm type-check       # Type-check UI code
pnpm clean            # Clean build artifacts
```

## 🔧 Package Management

### Adding Dependencies

```bash
# Add to specific workspace
pnpm --filter @tapestry/mobile add package-name
pnpm --filter @tapestry/web add package-name
pnpm --filter @tapestry/shared add package-name

# Add dev dependency
pnpm --filter @tapestry/mobile add -D package-name

# Add to root workspace
pnpm add -w package-name

# Add to all workspaces
pnpm add -r package-name
```

### Removing Dependencies

```bash
# Remove from specific workspace
pnpm --filter @tapestry/mobile remove package-name

# Remove from root
pnpm remove -w package-name
```

### Updating Dependencies

```bash
# Update all dependencies
pnpm update

# Update specific package
pnpm update package-name

# Update in specific workspace
pnpm --filter @tapestry/mobile update package-name

# Interactive update
pnpm update -i
```

## 🔍 Workspace Filters

Run commands on specific workspaces using `--filter`:

```bash
# Single workspace
pnpm --filter @tapestry/mobile [command]

# Multiple workspaces
pnpm --filter @tapestry/mobile --filter @tapestry/web [command]

# Pattern matching
pnpm --filter "@tapestry/*" [command]

# Exclude workspace
pnpm --filter "!@tapestry/mobile" [command]

# Dependencies of workspace
pnpm --filter @tapestry/mobile... [command]

# Dependents of workspace
pnpm --filter ...@tapestry/shared [command]
```

## ⚡ Turbo Commands

```bash
# Build with cache
pnpm build

# Build without cache
pnpm build --force

# Build with verbose output
pnpm build --verbose

# See what Turbo would do (dry run)
pnpm build --dry-run

# Clear Turbo cache
rm -rf .turbo

# Run with different concurrency
pnpm build --concurrency=4
```

## 🧹 Cleanup Commands

```bash
# Clean all build artifacts (from root)
pnpm clean

# Remove all node_modules (from root)
rm -rf node_modules apps/*/node_modules packages/*/node_modules services/*/node_modules

# Clean and reinstall everything
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Clean TypeScript build info
find . -name "*.tsbuildinfo" -delete

# Clean Expo cache
cd apps/mobile && rm -rf .expo

# Clean Next.js cache
cd apps/web && rm -rf .next

# Clean Turbo cache
rm -rf .turbo
```

## 🐛 Debugging Commands

```bash
# Check pnpm version
pnpm --version

# List all workspaces
pnpm list --depth=0

# Show workspace info
pnpm list --depth=-1

# Check for outdated packages
pnpm outdated

# Check for security issues
pnpm audit

# Fix security issues
pnpm audit --fix

# Verify package integrity
pnpm install --frozen-lockfile
```

## 🔀 Git Commands

```bash
# Create feature branch
git checkout -b feature/your-feature

# Stage changes
git add .

# Commit (runs lint-staged automatically)
git commit -m "Your message"

# Push branch
git push origin feature/your-feature

# Pull latest changes
git pull origin main

# View status
git status

# View diff
git diff
```

## 🧪 Testing Commands (when tests are added)

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run tests in specific workspace
pnpm --filter @tapestry/shared test
```

## 📊 Useful Aliases

Add these to your `.bashrc` or `.zshrc`:

```bash
# Navigate to project
alias tapestry="cd ~/path/to/Tapestry-12-2025"

# Quick commands
alias pi="pnpm install"
alias pb="pnpm build"
alias pd="pnpm dev"
alias pl="pnpm lint"
alias pf="pnpm format"
alias pc="pnpm clean"

# Workspace shortcuts
alias mobile="cd apps/mobile"
alias web="cd apps/web"
alias api="cd services/api"
```

## 🔑 Environment Variables

```bash
# Copy example env files
cp .env.example .env

# Apps/packages may have their own .env files
cp apps/web/.env.example apps/web/.env.local
cp services/api/.env.example services/api/.env
```

## 📱 Expo-Specific Commands

```bash
cd apps/mobile

# Start with different modes
pnpm start --clear          # Clear cache and start
pnpm start --tunnel         # Start with tunnel
pnpm start --lan            # Use LAN instead of localhost
pnpm start --offline        # Work offline

# Build commands
npx expo prebuild           # Generate native code
npx expo build:ios          # Build iOS (requires Apple account)
npx expo build:android      # Build Android

# Update Expo
npx expo-doctor             # Check for issues
npx expo upgrade            # Upgrade Expo SDK
```

## 🌐 Next.js-Specific Commands

```bash
cd apps/web

# Development
pnpm dev                    # Start dev server
pnpm dev --turbo           # Start with Turbo mode (experimental)

# Build & Production
pnpm build                  # Build for production
pnpm start                  # Start production server

# Analysis
pnpm build --analyze       # Analyze bundle (if configured)

# Export static site
pnpm build && pnpm export  # Generate static export
```

## 💡 Tips

1. **Use filters for faster iteration**: Instead of running `pnpm build` which builds everything, use `pnpm --filter @tapestry/shared build` to build just what you need.

2. **Leverage Turbo cache**: After the first build, subsequent builds are much faster due to caching.

3. **Run specific tasks**: Use `turbo run [task] --filter=[package]` for precise control.

4. **Check logs**: Turbo logs are in `.turbo/runs/`. Check them if something fails.

5. **Use --dry-run**: Preview what Turbo will do with `pnpm build --dry-run`.

6. **Parallel tasks**: Turbo runs tasks in parallel when possible. Check `turbo.json` for pipeline configuration.

## 🆘 When Things Go Wrong

```bash
# Full reset
rm -rf node_modules pnpm-lock.yaml .turbo apps/*/node_modules packages/*/node_modules services/*/node_modules
pnpm install
pnpm build

# Fix git hooks
pnpm prepare

# Check for issues
pnpm --filter @tapestry/mobile doctor   # For Expo
pnpm audit                               # For security issues
```

---

For more detailed information, see [SETUP.md](SETUP.md) or [README.md](README.md).
