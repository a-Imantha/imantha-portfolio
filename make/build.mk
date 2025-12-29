# =========================
# Build & Production Commands
# =========================

.PHONY: _build _build-analyze _start _export clean-build clean-cache

_build: ## Build production bundle
	@echo "🏗️  Building production bundle..."
	@npm run build
	@echo "✅ Build complete"

_build-analyze: ## Build with bundle analyzer
	@echo "📊 Building with bundle analyzer..."
	@ANALYZE=true npm run build

_start: ## Start production server (requires build first)
	@echo "🚀 Starting production server..."
	@npm run start

_export: ## Export static site
	@echo "📤 Exporting static site..."
	@npm run build
	@echo "✅ Static export complete (check 'out' directory)"

clean-build: ## Remove .next build directory
	@echo "🧹 Removing .next build directory..."
	@rm -rf .next
	@echo "✅ .next removed"

clean-cache: ## Remove Next.js cache
	@echo "🧹 Removing Next.js cache..."
	@rm -rf .next/cache
	@echo "✅ Cache cleared"

