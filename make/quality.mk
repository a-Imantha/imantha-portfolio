# =========================
# Quality & Testing Commands
# =========================

.PHONY: _lint _lint-fix _format _type-check _test preflight

_lint: ## Run ESLint
	@echo "🔍 Running ESLint..."
	@npm run lint
	@echo "✅ Linting complete"

_lint-fix: ## Run ESLint with auto-fix
	@echo "🔧 Running ESLint with auto-fix..."
	@npm run lint -- --fix
	@echo "✅ Linting complete (with fixes)"

_format: ## Format code with Prettier (if configured)
	@echo "🎨 Formatting code..."
	@if npm run | grep -q "format"; then \
		npm run format; \
	else \
		echo "⚠️  No format script found in package.json"; \
		echo "   Consider adding: \"format\": \"prettier --write .\""; \
	fi

_type-check: ## Run TypeScript type checking
	@echo "🔎 Running TypeScript type checking..."
	@npx tsc --noEmit
	@echo "✅ Type checking complete"

_test: ## Run tests (if configured)
	@echo "🧪 Running tests..."
	@if npm run | grep -q "test"; then \
		npm run test; \
	else \
		echo "⚠️  No test script found in package.json"; \
		echo "   Consider adding a test framework like Jest or Vitest"; \
	fi

preflight: ## Run all quality checks (lint + type-check)
	@echo "🚦 Running preflight checks..."
	@echo ""
	@$(MAKE) -s _lint
	@echo ""
	@$(MAKE) -s _type-check
	@echo ""
	@echo "✅ All preflight checks passed"

_hooks-install: ## Install git hooks
	@echo "🔧 Installing git hooks..."
	@$(ROOT_DIR)/scripts/setup-hooks.sh install

_hooks-remove: ## Remove git hooks
	@echo "🗑️  Removing git hooks..."
	@$(ROOT_DIR)/scripts/setup-hooks.sh remove

_hooks-status: ## Show git hooks status
	@$(ROOT_DIR)/scripts/setup-hooks.sh status

