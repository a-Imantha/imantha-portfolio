# Makefile Documentation

This project uses GNU Make to provide a consistent developer experience with easy-to-remember commands.

## Why Use Make?

- **Consistency**: Same commands work across different environments
- **Discoverability**: `make help` shows all available commands
- **Simplicity**: No need to remember complex npm script names
- **Efficiency**: Short aliases for common tasks
- **Documentation**: Built-in help text for every command

## Installation

Make is pre-installed on most Unix-like systems (macOS, Linux).

**macOS:**
```bash
xcode-select --install
```

**Ubuntu/Debian:**
```bash
sudo apt-get install build-essential
```

**Windows:**
Use WSL (Windows Subsystem for Linux) or install via Chocolatey:
```bash
choco install make
```

## Quick Start

```bash
# See all commands
make help

# Complete setup (recommended for first time)
make setup

# Start development
make dev
```

## Command Reference

### Setup & Installation

| Command | Description |
|---------|-------------|
| `make setup` | Complete project setup (install + hooks) |
| `make install` | Install npm dependencies only |
| `make hooks-install` | Install git pre-push hooks |
| `make hooks-remove` | Remove git hooks |
| `make hooks-status` | Check hooks installation status |

### Development

| Command | Description |
|---------|-------------|
| `make dev` | Start Next.js development server |
| `make dev-turbo` | Start with turbopack (faster HMR) |
| `make dev-debug` | Start with Node.js debugging enabled |
| `make install` | Install npm dependencies |

### Build & Deploy

| Command | Description |
|---------|-------------|
| `make build` | Build production bundle |
| `make build-analyze` | Build with bundle size analyzer |
| `make start` | Start production server (requires build first) |
| `make export` | Export as static site |

### Quality & Testing

| Command | Description |
|---------|-------------|
| `make lint` | Run ESLint checks |
| `make lint-fix` | Auto-fix linting issues |
| `make format` | Format code with Prettier |
| `make type-check` | Run TypeScript type checking |
| `make test` | Run tests (when configured) |
| `make preflight` | Run all quality checks |

### Content Management

| Command | Description |
|---------|-------------|
| `make add-content` | Show guide for adding content |
| `make validate-content` | Validate MDX files and frontmatter |

### Cleanup

| Command | Description |
|---------|-------------|
| `make clean` | Remove `.next` and cache |
| `make clean-all` | Remove all generated files and `node_modules` |
| `make reset` | Fresh install (clean-all + install) |

### Utilities

| Command | Description |
|---------|-------------|
| `make info` | Show project information |
| `make optimize-images` | Optimize images (requires tools) |
| `make help-util` | Show additional utility commands |

## Common Workflows

### First Time Setup

```bash
# Complete setup (recommended)
make setup              # Installs dependencies + git hooks

# Or step by step
make install            # Install dependencies
make hooks-install      # Install git hooks
make dev                # Start development
```

### Daily Development

```bash
# Start development server
make dev

# Make changes, test locally
# Hooks will automatically check before push
```

### Before Committing

```bash
# Check code quality
make preflight

# Or individually
make lint
make type-check
```

### Building for Production

```bash
# Test production build locally
make build
make start

# Or export as static site
make export
```

### Cleaning Up

```bash
# Quick clean (build artifacts only)
make clean

# Deep clean (including node_modules)
make clean-all

# Fresh start
make reset
```

### Git Hooks Workflow

```bash
# First time: install hooks
make hooks-install

# Check if hooks are active
make hooks-status

# Develop normally - hooks run automatically
git add .
git commit -m "Your changes"
git push                    # ← Pre-push hook runs here

# If hook fails, fix issues
make lint-fix
make type-check
git push                    # Try again

# Remove hooks (if needed)
make hooks-remove
```

**What the pre-push hook does:**
1. Runs ESLint to catch code style issues
2. Runs TypeScript to catch type errors
3. Runs tests (when configured)
4. Blocks push if any check fails

**Bypass hook** (not recommended):
```bash
git push --no-verify
```

## Architecture

The Makefile system is modular:

```
Makefile              # Main entry point
make/
├── dev.mk           # Development commands
├── build.mk         # Build and production
├── quality.mk       # Linting and testing
└── utility.mk       # Maintenance tools
```

Each `.mk` file focuses on a specific domain, making the system easy to maintain and extend.

## Customization

### Adding New Commands

1. Edit the appropriate `.mk` file in `make/`
2. Follow the naming convention: `_command-name` (private) or `command-name` (public)
3. Add help text with `## Description`
4. Export in main `Makefile` if needed

Example:
```makefile
# In make/dev.mk
.PHONY: _my-command

_my-command: ## My command description
	@echo "🎯 Doing something..."
	@npm run my-script
	@echo "✅ Done"
```

```makefile
# In Makefile
my-command: _my-command ## Public alias
```

### Customizing Colors

Colors are auto-detected based on terminal support. To customize, edit `scripts/theme.sh`.

## Troubleshooting

### Command Not Found

```bash
# Check if make is installed
which make

# Check version (should be GNU Make 3.81+)
make --version
```

### Commands Don't Work

```bash
# Ensure you're in project root
cd /path/to/imantha-portfolio

# Check Makefile syntax
make -n help
```

### Scripts Permission Denied

```bash
# Make scripts executable
chmod +x scripts/*.sh
```

## Tips

- Use tab completion: Type `make ` and press Tab twice
- Chain commands: `make clean && make build`
- See what would run: `make -n <command>` (dry run)
- Run from subdirectories: Make commands work from any project directory
- Check dependencies: Make will tell you if prerequisites are missing

## npm vs Make

Both work! Use whichever you prefer:

```bash
# These are equivalent
npm run dev    ←→  make dev
npm run build  ←→  make build
npm run lint   ←→  make lint
```

The Makefile adds:
- Shorter commands
- Better organization
- Chained operations
- Platform consistency

## Further Reading

- [GNU Make Manual](https://www.gnu.org/software/make/manual/)
- [Makefile Tutorial](https://makefiletutorial.com/)
- Project-specific docs: `make/README.md`

