#!/usr/bin/env bash
# =========================
# Git Hooks Setup Script
# =========================
# Installs or removes git hooks for quality checks

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

# Get repository root
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GITHOOKS_DIR="$REPO_ROOT/.githooks"
GIT_HOOKS_DIR="$REPO_ROOT/.git/hooks"

# Function to install hooks
install_hooks() {
    echo ""
    echo -e "${BLUE}🔧 Installing git hooks...${NC}"
    echo ""
    
    # Check if .git directory exists
    if [ ! -d "$REPO_ROOT/.git" ]; then
        echo -e "${RED}❌ Error: .git directory not found${NC}"
        echo "   Are you in a git repository?"
        exit 1
    fi
    
    # Create hooks directory if it doesn't exist
    mkdir -p "$GIT_HOOKS_DIR"
    
    # Install pre-push hook
    if [ -f "$GITHOOKS_DIR/pre-push" ]; then
        ln -sf "$GITHOOKS_DIR/pre-push" "$GIT_HOOKS_DIR/pre-push"
        chmod +x "$GITHOOKS_DIR/pre-push"
        chmod +x "$GIT_HOOKS_DIR/pre-push"
        echo -e "${GREEN}✓ Installed pre-push hook${NC}"
    else
        echo -e "${YELLOW}⚠ Warning: pre-push hook not found in .githooks/${NC}"
    fi
    
    echo ""
    echo -e "${GREEN}✅ Git hooks installed successfully!${NC}"
    echo ""
    echo "The following checks will run before each push:"
    echo "  • ESLint (code quality)"
    echo "  • TypeScript (type checking)"
    echo "  • Tests (if configured)"
    echo ""
    echo "To bypass hooks (not recommended):"
    echo "  git push --no-verify"
    echo ""
}

# Function to remove hooks
remove_hooks() {
    echo ""
    echo -e "${BLUE}🗑️  Removing git hooks...${NC}"
    echo ""
    
    # Remove pre-push hook
    if [ -L "$GIT_HOOKS_DIR/pre-push" ]; then
        rm "$GIT_HOOKS_DIR/pre-push"
        echo -e "${GREEN}✓ Removed pre-push hook${NC}"
    elif [ -f "$GIT_HOOKS_DIR/pre-push" ]; then
        echo -e "${YELLOW}⚠ Warning: pre-push hook exists but is not a symlink${NC}"
        echo "   Manually remove: $GIT_HOOKS_DIR/pre-push"
    else
        echo -e "${YELLOW}⚠ No pre-push hook found${NC}"
    fi
    
    echo ""
    echo -e "${GREEN}✅ Git hooks removed${NC}"
    echo ""
}

# Function to show status
show_status() {
    echo ""
    echo -e "${BLUE}📋 Git Hooks Status${NC}"
    echo ""
    
    if [ -L "$GIT_HOOKS_DIR/pre-push" ]; then
        echo -e "${GREEN}✓ pre-push hook: INSTALLED${NC}"
        echo "  → $(readlink "$GIT_HOOKS_DIR/pre-push")"
    elif [ -f "$GIT_HOOKS_DIR/pre-push" ]; then
        echo -e "${YELLOW}⚠ pre-push hook: EXISTS (not managed)${NC}"
    else
        echo -e "${RED}✗ pre-push hook: NOT INSTALLED${NC}"
    fi
    
    echo ""
}

# Main script
case "${1:-install}" in
    install)
        install_hooks
        ;;
    remove|uninstall)
        remove_hooks
        ;;
    status)
        show_status
        ;;
    *)
        echo "Usage: $0 {install|remove|status}"
        echo ""
        echo "Commands:"
        echo "  install    Install git hooks (default)"
        echo "  remove     Remove git hooks"
        echo "  status     Show hooks status"
        exit 1
        ;;
esac

