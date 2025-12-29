# =========================
# Development Commands
# =========================

.PHONY: _dev _dev-turbo _dev-debug install clean-modules

_dev: ## Start Next.js development server
	@echo "🚀 Starting development server..."
	@npm run dev

_dev-turbo: ## Start development server with turbopack
	@echo "⚡ Starting development server with turbopack..."
	@npm run dev -- --turbo

_dev-debug: ## Start development server with debugging enabled
	@echo "🐛 Starting development server in debug mode..."
	@NODE_OPTIONS='--inspect' npm run dev

install: ## Install dependencies
	@echo "📦 Installing dependencies..."
	@npm install
	@echo "✅ Dependencies installed"

clean-modules: ## Remove node_modules
	@echo "🧹 Removing node_modules..."
	@rm -rf node_modules
	@echo "✅ node_modules removed"

