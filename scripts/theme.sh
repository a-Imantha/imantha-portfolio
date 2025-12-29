#!/usr/bin/env bash
# =========================
# Terminal Theme Detection
# =========================
# Detects terminal color scheme and exports color codes for Makefile

set -euo pipefail

# Detect if terminal supports colors
if [ -t 1 ] && command -v tput >/dev/null 2>&1 && [ "$(tput colors 2>/dev/null || echo 0)" -ge 8 ]; then
    COLOR_SUPPORT=true
else
    COLOR_SUPPORT=false
fi

# Define color codes
if [ "$COLOR_SUPPORT" = true ]; then
    COLOR_RESET='\033[0m'
    COLOR_BOLD='\033[1m'
    COLOR_DIM='\033[2m'
    
    # Basic colors
    COLOR_RED='\033[0;31m'
    COLOR_GREEN='\033[0;32m'
    COLOR_YELLOW='\033[0;33m'
    COLOR_BLUE='\033[0;34m'
    COLOR_MAGENTA='\033[0;35m'
    COLOR_CYAN='\033[0;36m'
    COLOR_WHITE='\033[0;37m'
    
    # Bright colors
    COLOR_BRIGHT_RED='\033[1;31m'
    COLOR_BRIGHT_GREEN='\033[1;32m'
    COLOR_BRIGHT_YELLOW='\033[1;33m'
    COLOR_BRIGHT_BLUE='\033[1;34m'
    COLOR_BRIGHT_MAGENTA='\033[1;35m'
    COLOR_BRIGHT_CYAN='\033[1;36m'
    COLOR_BRIGHT_WHITE='\033[1;37m'
else
    COLOR_RESET=''
    COLOR_BOLD=''
    COLOR_DIM=''
    COLOR_RED=''
    COLOR_GREEN=''
    COLOR_YELLOW=''
    COLOR_BLUE=''
    COLOR_MAGENTA=''
    COLOR_CYAN=''
    COLOR_WHITE=''
    COLOR_BRIGHT_RED=''
    COLOR_BRIGHT_GREEN=''
    COLOR_BRIGHT_YELLOW=''
    COLOR_BRIGHT_BLUE=''
    COLOR_BRIGHT_MAGENTA=''
    COLOR_BRIGHT_CYAN=''
    COLOR_BRIGHT_WHITE=''
fi

# Emit Makefile-compatible variable definitions
if [ "${1:-}" = "--emit-make" ]; then
    cat <<EOF
COLOR_RESET := ${COLOR_RESET}
COLOR_BOLD := ${COLOR_BOLD}
COLOR_DIM := ${COLOR_DIM}
COLOR_RED := ${COLOR_RED}
COLOR_GREEN := ${COLOR_GREEN}
COLOR_YELLOW := ${COLOR_YELLOW}
COLOR_BLUE := ${COLOR_BLUE}
COLOR_MAGENTA := ${COLOR_MAGENTA}
COLOR_CYAN := ${COLOR_CYAN}
COLOR_WHITE := ${COLOR_WHITE}
COLOR_BRIGHT_RED := ${COLOR_BRIGHT_RED}
COLOR_BRIGHT_GREEN := ${COLOR_BRIGHT_GREEN}
COLOR_BRIGHT_YELLOW := ${COLOR_BRIGHT_YELLOW}
COLOR_BRIGHT_BLUE := ${COLOR_BRIGHT_BLUE}
COLOR_BRIGHT_MAGENTA := ${COLOR_BRIGHT_MAGENTA}
COLOR_BRIGHT_CYAN := ${COLOR_BRIGHT_CYAN}
COLOR_BRIGHT_WHITE := ${COLOR_BRIGHT_WHITE}
EOF
fi

