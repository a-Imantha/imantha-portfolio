#!/usr/bin/env bash
# =========================
# Formatting Script
# =========================
# Formats code with ESLint --fix or Prettier

set -euo pipefail

# Get project root
PROJECT_DIR="${1:-.}"
cd "$PROJECT_DIR"

# Ensure dependencies are installed and complete
if [ ! -d "node_modules" ] || [ ! -d "node_modules/.bin" ]; then
  echo "📦 Installing dependencies (node_modules incomplete)..."
  npm install
  echo ""
fi

echo "🎨 Formatting code..."

# Use ESLint --fix for formatting
npm run lint -- --fix

echo "✅ Formatting complete!"

