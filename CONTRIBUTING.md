# Contributing Guide

Thank you for contributing to the Imantha Portfolio project! This guide will help you set up your development environment and understand our quality standards.

## 🚀 Getting Started

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd imantha-portfolio

# Complete setup (install dependencies + git hooks)
make setup

# Start development
make dev
```

The `make setup` command will:
1. Install all npm dependencies
2. Install git pre-push hooks for quality checks

## 🔧 Development Workflow

### Daily Development

```bash
# Start the development server
make dev

# In another terminal, run quality checks as you work
make lint          # Check for linting issues
make type-check    # Check TypeScript types
make lint-fix      # Auto-fix linting issues
```

### Before Committing

Our git hooks will automatically run quality checks before pushing, but you can run them manually:

```bash
# Run all quality checks
make preflight

# Or individually
make lint
make type-check
```

### Git Hooks

This project uses git hooks to maintain code quality:

**Pre-Push Hook:**
- Runs ESLint to catch code quality issues
- Runs TypeScript type checking
- Runs tests (if configured)
- Prevents pushing if checks fail

**Managing Hooks:**
```bash
make hooks-install    # Install git hooks
make hooks-remove     # Remove git hooks
make hooks-status     # Check hook status
```

**Bypassing Hooks** (not recommended):
```bash
git push --no-verify
```

## 📋 Quality Standards

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Enforced on all `.ts`, `.tsx` files
- **Formatting**: Use `make lint-fix` to auto-format

### Pull Request Checklist

Before opening a PR, ensure:

- [ ] Code passes all quality checks (`make preflight`)
- [ ] TypeScript has no errors (`make type-check`)
- [ ] ESLint has no errors (`make lint`)
- [ ] Build succeeds (`make build`)
- [ ] Changes are tested locally
- [ ] Commit messages are clear and descriptive

## 🤖 Continuous Integration

### GitHub Actions Workflows

Our CI/CD pipeline runs automatically on every PR:

#### Quality Checks Workflow
- **Triggers**: Pull requests to `main` or `develop` branches
- **Jobs**:
  1. **Code Quality**: ESLint + TypeScript checks
  2. **Build Verification**: Ensures project builds successfully
  3. **Tests**: Runs test suite (when configured)

#### What Gets Checked

```yaml
✅ ESLint (code quality)
✅ TypeScript (type checking)
✅ Build (production build)
⏳ Tests (disabled until configured)
```

### Status Badges

Add these to your README to show CI status:

```markdown
![Quality Checks](https://github.com/<username>/<repo>/actions/workflows/quality-checks.yml/badge.svg)
```

## 🛠️ Common Tasks

### Adding New Content

```bash
# Show content guide
make add-content

# Validate all content
make validate-content
```

See [Content Management](README.md#content-management-guide) in the main README.

### Building for Production

```bash
# Build
make build

# Test production build locally
make start

# Or export as static site
make export
```

### Cleaning Up

```bash
# Quick clean (build artifacts)
make clean

# Deep clean (including node_modules)
make clean-all

# Fresh start
make reset
```

## 🐛 Troubleshooting

### Pre-Push Hook Fails

If the pre-push hook fails:

1. **Fix linting issues:**
   ```bash
   make lint-fix
   ```

2. **Fix type errors:**
   ```bash
   make type-check
   # Fix reported issues in your code
   ```

3. **Run full preflight:**
   ```bash
   make preflight
   ```

### CI/CD Fails on PR

If GitHub Actions fails:

1. Pull latest changes: `git pull origin main`
2. Run preflight locally: `make preflight`
3. Fix any issues reported
4. Commit and push again

### Hooks Not Working

```bash
# Check hook status
make hooks-status

# Reinstall hooks
make hooks-remove
make hooks-install
```

## 📝 Commit Message Guidelines

Use clear, descriptive commit messages:

```bash
# Good
git commit -m "Add education logos to section cards"
git commit -m "Fix TypeScript errors in HeroSection"
git commit -m "Update README with setup instructions"

# Avoid
git commit -m "fixes"
git commit -m "updates"
git commit -m "wip"
```

### Commit Message Format

```
<type>: <description>

[optional body]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat: Add company logos to experience cards
fix: Resolve hydration error in ProjectsSection
docs: Update Makefile documentation
style: Format code with Prettier
refactor: Extract education data to separate file
test: Add unit tests for content loader
chore: Update dependencies
```

## 🎯 Best Practices

### TypeScript

- Use strict mode
- Define proper types (avoid `any`)
- Leverage type inference when possible
- Use Zod for runtime validation

### React/Next.js

- Use Server Components by default
- Client Components only when needed
- Optimize images with `next/image`
- Follow App Router patterns

### Content

- Validate frontmatter with Zod schemas
- Keep MDX clean and focused
- Optimize images before adding
- Test content locally before committing

## 🙋 Getting Help

If you encounter issues:

1. Check `make help` for available commands
2. Read `MAKEFILE.md` for detailed documentation
3. Review `DEV-WORKFLOW.md` for development tips
4. Check existing GitHub Issues
5. Open a new issue with details

## 📚 Additional Resources

- [Main README](README.md) - Project overview and setup
- [Makefile Documentation](MAKEFILE.md) - Command reference
- [Development Workflow](DEV-WORKFLOW.md) - Auto-reload and tips
- [Image Management](IMAGES.md) - Image guidelines

---

Thank you for contributing! 🎨

