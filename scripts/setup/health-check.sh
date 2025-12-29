#!/usr/bin/env bash
# =========================
# Health Check Script
# =========================
# Verifies prerequisites for development

set -euo pipefail

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Checking prerequisites...${NC}"
echo ""

# Track if any checks fail
CHECKS_FAILED=0

# Check Node.js
if command -v node >/dev/null 2>&1; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓ Node.js:${NC} $NODE_VERSION"
    
    # Check if version is 18+
    NODE_MAJOR=$(echo "$NODE_VERSION" | sed 's/v\([0-9]*\).*/\1/')
    if [ "$NODE_MAJOR" -lt 18 ]; then
        echo -e "${YELLOW}  ⚠ Warning: Node.js 18+ is recommended${NC}"
    fi
else
    echo -e "${RED}✗ Node.js: NOT FOUND${NC}"
    echo -e "${YELLOW}  Install Node.js 18+ from https://nodejs.org/${NC}"
    CHECKS_FAILED=1
fi

# Check npm
if command -v npm >/dev/null 2>&1; then
    NPM_VERSION=$(npm --version)
    echo -e "${GREEN}✓ npm:${NC} v$NPM_VERSION"
else
    echo -e "${RED}✗ npm: NOT FOUND${NC}"
    echo -e "${YELLOW}  npm should be installed with Node.js${NC}"
    CHECKS_FAILED=1
fi

# Check git
if command -v git >/dev/null 2>&1; then
    GIT_VERSION=$(git --version | sed 's/git version //')
    echo -e "${GREEN}✓ git:${NC} $GIT_VERSION"
else
    echo -e "${RED}✗ git: NOT FOUND${NC}"
    echo -e "${YELLOW}  Install git from https://git-scm.com/${NC}"
    CHECKS_FAILED=1
fi

# Check make
if command -v make >/dev/null 2>&1; then
    MAKE_VERSION=$(make --version | head -n 1)
    echo -e "${GREEN}✓ make:${NC} $MAKE_VERSION"
else
    echo -e "${YELLOW}⚠ make: NOT FOUND${NC}"
    echo -e "${YELLOW}  Make is optional but recommended${NC}"
    echo -e "${YELLOW}  macOS: xcode-select --install${NC}"
    echo -e "${YELLOW}  Ubuntu/Debian: sudo apt-get install build-essential${NC}"
fi

echo ""

# Exit if critical checks failed
if [ $CHECKS_FAILED -ne 0 ]; then
    echo -e "${RED}❌ Some prerequisites are missing${NC}"
    echo ""
    exit 1
fi

echo -e "${GREEN}✅ All prerequisites satisfied${NC}"
echo ""

