# =========================
# Setup & Installation
# =========================

.PHONY: _setup _githook-install _githook-remove

.SILENT: _setup

_setup: ## Setup development environment
	@echo "🚀 Setting up portfolio development environment..."
	@echo ""
	@echo "📋 Running health checks..."
	@$(ROOT_DIR)/scripts/setup/health-check.sh
	@echo ""
	@echo "📦 Installing dependencies..."
	@# IMPORTANT: set -e makes this shell exit immediately if any command fails (fail-fast)
	@set -e; \
	if [ ! -d "node_modules" ] || [ ! -f "node_modules/.bin/next" ]; then \
		echo "  Installing npm packages..."; \
		npm install; \
		echo "  ✅ Dependencies installed"; \
	else \
		echo "  ✅ Dependencies already installed"; \
	fi
	@echo ""
	@echo "🔧 Installing git hooks..."
	@$(ROOT_DIR)/scripts/setup-hooks.sh install
	@echo ""
	@echo "✅ Setup complete!"
	@echo ""
	@echo "💡 Next steps:"
	@echo "  1. (Optional) Configure Medium RSS:"
	@echo "     cp .env.example .env"
	@echo "     # Edit .env and set NEXT_PUBLIC_MEDIUM_RSS_URL"
	@echo "  2. Start development:"
	@echo "     make dev"
	@echo "  3. Open http://localhost:3000"
	@echo ""

_githook-install: ## Install pre-push hooks
	@$(ROOT_DIR)/scripts/setup-hooks.sh install

_githook-remove: ## Remove all git hooks and reset to defaults
	@echo "🧹 Removing all git hooks..."
	@echo "  Removing pre-push hooks (if installed)..."
	@rm -f .git/hooks/pre-push 2>/dev/null || true
	@echo "  Removing commit-msg hooks (if installed)..."
	@rm -f .git/hooks/commit-msg 2>/dev/null || true
	@echo "  Removing pre-commit hooks (if installed)..."
	@rm -f .git/hooks/pre-commit 2>/dev/null || true
	@echo "✅ All git hooks removed - reset to defaults"
