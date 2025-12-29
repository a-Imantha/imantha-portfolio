# =========================
# Utility Commands
# =========================

.PHONY: _help-util clean-all reset info add-content validate-content optimize-images

_help-util: ## Show utility commands
	@echo ""
	@echo "════════════════════════════════════════════════════════════════"
	@echo "  🔧 Utility Commands"
	@echo "════════════════════════════════════════════════════════════════"
	@echo ""
	@echo "  info                Show project information"
	@echo "  add-content         Guide for adding new content"
	@echo "  validate-content    Validate MDX content and frontmatter"
	@echo "  optimize-images     Optimize images in public directory"
	@echo "  clean-all           Remove all generated files and dependencies"
	@echo "  reset               Fresh install (clean + install)"
	@echo ""

info: ## Show project information
	@echo ""
	@echo "════════════════════════════════════════════════════════════════"
	@echo "  📋 Project Information"
	@echo "════════════════════════════════════════════════════════════════"
	@echo ""
	@echo "  Project:        Imantha Ahangama Portfolio"
	@echo "  Framework:      Next.js $(shell node -p "require('./package.json').dependencies.next")"
	@echo "  Node version:   $(shell node --version)"
	@echo "  npm version:    $(shell npm --version)"
	@echo ""
	@echo "  Root:           $(ROOT_DIR)"
	@echo "  Content:        $(ROOT_DIR)/content"
	@echo "  Public assets:  $(ROOT_DIR)/public"
	@echo ""
	@if [ -f .next/BUILD_ID ]; then \
		echo "  Last build:     $$(date -r .next/BUILD_ID '+%Y-%m-%d %H:%M:%S')"; \
	else \
		echo "  Last build:     Never (run 'make build')"; \
	fi
	@echo ""

add-content: ## Show guide for adding new content
	@echo ""
	@echo "════════════════════════════════════════════════════════════════"
	@echo "  📝 Adding New Content"
	@echo "════════════════════════════════════════════════════════════════"
	@echo ""
	@echo "  📁 Projects:        content/projects/your-project.mdx"
	@echo "  🔧 Tech Stack:      content/stack/your-tech.mdx"
	@echo "  📰 Articles:        content/articles/your-article.mdx"
	@echo "  🌌 Astrophotography: content/astro/your-photo.mdx"
	@echo ""
	@echo "  See README.md for detailed instructions and frontmatter schemas"
	@echo ""

validate-content: ## Validate MDX content and frontmatter
	@echo "✅ Validating content..."
	@echo "   (Building the project validates all content via Zod schemas)"
	@$(MAKE) -s _build
	@echo "✅ All content is valid"

optimize-images: ## Optimize images in public directory
	@echo "🖼️  Optimizing images..."
	@if command -v imageoptim-cli >/dev/null 2>&1; then \
		imageoptim-cli --imagealpha --jpegmini --quit public/images; \
		echo "✅ Images optimized"; \
	elif command -v optipng >/dev/null 2>&1 && command -v jpegoptim >/dev/null 2>&1; then \
		find public/images -name "*.png" -exec optipng -quiet {} \;; \
		find public/images -name "*.jpg" -o -name "*.jpeg" -exec jpegoptim --quiet --strip-all {} \;; \
		echo "✅ Images optimized"; \
	else \
		echo "⚠️  No image optimization tools found"; \
		echo "   Install imageoptim-cli, or optipng + jpegoptim"; \
	fi

clean-all: ## Remove all generated files and dependencies
	@echo "🧹 Cleaning all generated files..."
	@rm -rf .next
	@rm -rf node_modules
	@rm -rf out
	@rm -rf .turbo
	@echo "✅ Cleanup complete"

reset: clean-all _setup ## Fresh install (clean + setup)
	@echo ""
	@echo "✅ Reset complete - ready to develop!"
	@echo ""

