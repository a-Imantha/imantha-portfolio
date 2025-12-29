# =========================
# Quality & Testing Commands
# =========================

.PHONY: _lint _lint-fix _format _type-check _test preflight lint-check format-check

##@ Code Quality

_lint: ## Run ESLint
	@$(ROOT_DIR)/scripts/quality/lint.sh $(ROOT_DIR)

_lint-fix: ## Run ESLint with auto-fix
	@echo "🔧 Running ESLint with auto-fix..."
	@# Ensure dependencies are installed
	@if [ ! -d "$(ROOT_DIR)/node_modules" ] || [ ! -d "$(ROOT_DIR)/node_modules/.bin" ]; then \
		echo "📦 Installing dependencies..."; \
		cd $(ROOT_DIR) && npm install; \
	fi
	@cd $(ROOT_DIR) && npm run lint -- --fix
	@echo "✅ Linting complete (with fixes)"

_format: ## Format code
	@$(ROOT_DIR)/scripts/quality/format.sh $(ROOT_DIR)

lint-check: _lint ## Check linting without fixing

format-check: _lint ## Check formatting without fixing

_type-check: ## Run TypeScript type checking
	@$(ROOT_DIR)/scripts/quality/type-check.sh $(ROOT_DIR)

_test: ## Run tests (if configured)
	@echo "🧪 Running tests..."
	@# Ensure dependencies are installed
	@if [ ! -d "$(ROOT_DIR)/node_modules" ] || [ ! -d "$(ROOT_DIR)/node_modules/.bin" ]; then \
		echo "📦 Installing dependencies..."; \
		cd $(ROOT_DIR) && npm install; \
	fi
	@if npm run | grep -q "test"; then \
		npm run test; \
		echo "✅ Tests complete"; \
	else \
		echo "⚠️  No test script found in package.json"; \
		echo "   Consider adding a test framework like Jest or Vitest"; \
	fi

preflight: ## Run all quality checks (format + lint + type-check)
	@echo "🚦 Running preflight checks..."
	@echo ""
	@echo "1️⃣ Formatting code..."
	@$(MAKE) -s _format
	@echo ""
	@echo "2️⃣ Running linting..."
	@$(MAKE) -s _lint
	@echo ""
	@echo "3️⃣ Running TypeScript type checking..."
	@$(MAKE) -s _type-check
	@echo ""
	@echo "✅ All preflight checks passed!"

_hooks-status: ## Show git hooks status
	@$(ROOT_DIR)/scripts/setup-hooks.sh status

