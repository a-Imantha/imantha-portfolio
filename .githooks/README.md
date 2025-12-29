# Git Hooks

This directory contains git hooks that automatically run quality checks during git operations.

## Available Hooks

### pre-push

Runs before `git push` to ensure code quality:

- ✅ Format (auto-fix code style)
- ✅ ESLint (code quality checks)
- ✅ TypeScript (type checking)

**When it runs:** Before every `git push`

**What it does:**
1. Runs `npm run lint -- --fix` - auto-formats code
2. Runs `npm run lint` - catches code style issues
3. Runs `npx tsc --noEmit` - catches type errors
4. Blocks push if any check fails

**Output:**
- ✅ Green checkmarks for passing checks
- ❌ Red X for failing checks
- Helpful error messages with fix suggestions

## Installation

### Automatic (Recommended)

```bash
# During initial setup
make setup

# Or manually
make hooks-install
```

### Manual Installation

```bash
# Link hooks to .git/hooks
ln -sf ../../.githooks/pre-push .git/hooks/pre-push
chmod +x .githooks/pre-push
chmod +x .git/hooks/pre-push
```

## Usage

Once installed, hooks run automatically:

```bash
# This will trigger pre-push hook
git push

# Skip hook if needed (not recommended)
git push --no-verify
```

## Managing Hooks

```bash
# Check if hooks are installed
make hooks-status

# Install hooks
make hooks-install

# Remove hooks
make hooks-remove
```

## Customizing Hooks

### Adding New Checks

Edit `.githooks/pre-push` and add your check:

```bash
run_check "Your Check Name" "your-command-here"
```

### Disabling Specific Checks

Comment out checks you don't want:

```bash
# run_check "ESLint" "npm run lint"  # Disabled
```

## Troubleshooting

### Hook Fails

If the pre-push hook fails:

1. **Read the error message** - it tells you what failed
2. **Fix the issues:**
   ```bash
   make lint-fix      # Auto-fix linting
   make type-check    # Check types
   ```
3. **Try again:**
   ```bash
   git push
   ```

### Hook Doesn't Run

Check if it's installed:

```bash
make hooks-status
```

If not installed:

```bash
make hooks-install
```

### Permission Denied

Make the hook executable:

```bash
chmod +x .githooks/pre-push
chmod +x .git/hooks/pre-push
```

### Skip Hook Temporarily

Only when absolutely necessary:

```bash
git push --no-verify
```

⚠️ **Warning:** This bypasses all quality checks and is not recommended.

## Best Practices

1. **Keep hooks fast** - Long-running hooks frustrate developers
2. **Make output clear** - Helpful error messages speed up fixes
3. **Test locally first** - Run `make preflight` before pushing
4. **Don't skip hooks** - They catch issues early

## Why Use Hooks?

Git hooks help maintain code quality by:

- ✅ Catching issues before they reach the repository
- ✅ Enforcing coding standards automatically
- ✅ Reducing CI/CD failures
- ✅ Saving time in code review
- ✅ Maintaining a clean git history

## Related

- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contributing guidelines
- [Makefile](../Makefile) - Development commands
- [GitHub Actions](../.github/workflows/quality-checks.yml) - CI/CD pipeline

