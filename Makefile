# =========================
# Imantha Portfolio Makefile
# =========================

# Select shell (prefer zsh, then bash)
ZSH_PATH := $(shell command -v zsh 2>/dev/null)
BASH_PATH := $(shell command -v bash 2>/dev/null)
ifneq ($(strip $(ZSH_PATH)),)
    SHELL := $(ZSH_PATH)
else ifneq ($(strip $(BASH_PATH)),)
    SHELL := $(BASH_PATH)
else
    $(error Could not find zsh or bash on PATH. Please install zsh or bash)
endif

# Common directory paths
ROOT_DIR := $(abspath $(dir $(firstword $(MAKEFILE_LIST))))
CONTENT_DIR := $(ROOT_DIR)/content
PUBLIC_DIR := $(ROOT_DIR)/public

# Export for sub-makefiles
export ROOT_DIR
export CONTENT_DIR
export PUBLIC_DIR

# Load color configuration based on terminal theme
$(eval $(shell $(ROOT_DIR)/scripts/theme.sh --emit-make 2>/dev/null || echo ""))

# Include modular makefiles
include make/dev.mk
include make/build.mk
include make/quality.mk
include make/utility.mk

# =========================
# Main Developer Interface
# =========================

.PHONY: help setup dev dev-turbo dev-debug build start export install clean lint lint-fix format type-check test hooks-install hooks-remove hooks-status

help: ## Show available commands
	@echo ""
	@echo "════════════════════════════════════════════════════════════════"
	@echo "  🎨 Imantha Portfolio - Development Commands"
	@echo "════════════════════════════════════════════════════════════════"
	@echo ""
	@echo "⚙️  SETUP:"
	@echo "  setup               Initial project setup (install + hooks)"
	@echo "  install             Install npm dependencies"
	@echo "  hooks-install       Install git pre-push hooks"
	@echo "  hooks-remove        Remove git hooks"
	@echo "  hooks-status        Show hooks installation status"
	@echo ""
	@echo "🚀 DEVELOPMENT:"
	@echo "  dev                 Start Next.js development server"
	@echo "  dev-turbo           Start dev server with turbopack (faster)"
	@echo "  dev-debug           Start dev server with Node.js debugging"
	@echo ""
	@echo "🏗️  BUILD & DEPLOY:"
	@echo "  build               Build production bundle"
	@echo "  build-analyze       Build with bundle size analyzer"
	@echo "  start               Start production server (requires build)"
	@echo "  export              Export static site"
	@echo ""
	@echo "✨ QUALITY & TESTING:"
	@echo "  lint                Run ESLint"
	@echo "  lint-fix            Run ESLint with auto-fix"
	@echo "  format              Format code with Prettier"
	@echo "  type-check          Run TypeScript type checking"
	@echo "  test                Run tests"
	@echo "  preflight           Run all quality checks (lint + type-check)"
	@echo ""
	@echo "📝 CONTENT MANAGEMENT:"
	@echo "  add-content         Show guide for adding new content"
	@echo "  validate-content    Validate all MDX content and frontmatter"
	@echo ""
	@echo "🧹 CLEANUP:"
	@echo "  clean               Remove .next and cache"
	@echo "  clean-all           Remove all generated files and node_modules"
	@echo "  reset               Fresh install (clean-all + install)"
	@echo ""
	@echo "🔧 UTILITIES:"
	@echo "  info                Show project information"
	@echo "  optimize-images     Optimize images in public directory"
	@echo "  help-util           Show additional utility commands"
	@echo ""
	@echo "💡 Quick Start:"
	@echo "  1. make setup       # Complete setup (install + hooks)"
	@echo "  2. make dev         # Start development server"
	@echo "  3. Open http://localhost:3000"
	@echo ""

# Main commands (delegate to sub-makefiles)
setup: install hooks-install ## Complete project setup
	@echo ""
	@echo "✅ Setup complete! Ready to develop."
	@echo ""
	@echo "Next steps:"
	@echo "  • Run: make dev      (start development server)"
	@echo "  • Visit: http://localhost:3000"
	@echo ""

dev: _dev ## Start development server

dev-turbo: _dev-turbo ## Start development server with turbopack

dev-debug: _dev-debug ## Start development server with debugging

build: _build ## Build production bundle

build-analyze: _build-analyze ## Build with bundle analyzer

start: _start ## Start production server

export: _export ## Export static site

lint: _lint ## Run ESLint

lint-fix: _lint-fix ## Run ESLint with auto-fix

format: _format ## Format code

type-check: _type-check ## Type check

test: _test ## Run tests

clean: clean-build clean-cache ## Remove build artifacts and cache
	@echo "✅ Clean complete"

# Git hooks management
hooks-install: _hooks-install ## Install git pre-push hooks

hooks-remove: _hooks-remove ## Remove git hooks

hooks-status: _hooks-status ## Show git hooks status

# Additional utility aliases
help-util: _help-util ## Show utility commands

# Default target
.DEFAULT_GOAL := help

