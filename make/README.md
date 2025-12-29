# Makefile System Documentation

This directory contains modular Makefile components that provide a consistent development workflow for the Imantha Portfolio project.

## Structure

```
make/
├── README.md       # This file
├── dev.mk          # Development server commands
├── build.mk        # Build and production commands
├── quality.mk      # Linting, formatting, type checking
└── utility.mk      # Utility and maintenance commands
```

## Philosophy

The Makefile system follows these principles:

1. **Modular**: Each `.mk` file focuses on a specific domain (dev, build, quality, utility)
2. **Discoverable**: `make help` provides a complete command reference
3. **Consistent**: Common patterns across all commands
4. **Simple**: Straightforward implementations that are easy to understand and modify

## Usage

### Quick Start

```bash
# Show all available commands
make help

# Install dependencies
make install

# Start development server
make dev

# Build for production
make build
```

### Development Workflow

```bash
# Start dev server
make dev

# Or use turbopack (faster)
make dev-turbo

# Or with debugging
make dev-debug
```

### Quality Checks

```bash
# Run linting
make lint

# Auto-fix linting issues
make lint-fix

# Type checking
make type-check

# Run all quality checks
make preflight
```

### Build & Deploy

```bash
# Build production bundle
make build

# Analyze bundle size
make build-analyze

# Test production build locally
make build
make start

# Export static site
make export
```

### Content Management

```bash
# Show content addition guide
make add-content

# Validate all MDX content
make validate-content
```

### Cleanup

```bash
# Clean build artifacts and cache
make clean

# Remove everything (including node_modules)
make clean-all

# Fresh install
make reset
```

## Adding New Commands

To add new commands, edit the appropriate `.mk` file:

1. **Development commands** → `dev.mk`
2. **Build commands** → `build.mk`
3. **Quality commands** → `quality.mk`
4. **Utility commands** → `utility.mk`

### Command Template

```makefile
.PHONY: _your-command

_your-command: ## Your command description
	@echo "🎯 Doing something..."
	@npm run your-script
	@echo "✅ Done"
```

Then add a public alias in the main `Makefile`:

```makefile
your-command: _your-command ## Public description
```

## Tips

- Use `@` prefix to suppress command echo (cleaner output)
- Use emojis for visual clarity (🚀 🏗️ ✨ 🧹 etc.)
- Always include success/completion messages
- Keep commands idempotent when possible
- Test commands work from any directory in the project

## Troubleshooting

### "command not found: make"

Install make on your system:

- **macOS**: `xcode-select --install`
- **Ubuntu/Debian**: `sudo apt-get install build-essential`
- **Windows**: Use WSL or install via Chocolatey

### Colors not working

The `scripts/theme.sh` script detects terminal color support. If colors don't work:

1. Ensure your terminal supports ANSI colors
2. Check that `tput` is installed
3. Try running in a different terminal

### Permission denied on scripts

Make scripts executable:

```bash
chmod +x scripts/*.sh
```

