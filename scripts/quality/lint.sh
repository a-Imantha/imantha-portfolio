#!/usr/bin/env bash
# =========================
# Linting Script
# =========================
# Runs ESLint checks with dependency verification

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

echo "🔍 Running ESLint..."
npm run lint

echo "✅ Linting complete!"

