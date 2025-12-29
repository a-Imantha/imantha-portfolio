#!/usr/bin/env bash
# =========================
# TypeScript Type Checking Script
# =========================
# Runs TypeScript compiler in check mode

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

echo "🔎 Running TypeScript type checking..."
npx tsc --noEmit

echo "✅ Type checking complete!"

