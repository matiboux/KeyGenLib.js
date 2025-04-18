#!/bin/sh
set -e

# Configure git repository
if [ ! -d "/git/.git" ]; then
	echo "Error: Watch git repository not found at '/git'." 2>&1
	exit 1
fi
git config --global --add safe.directory "$(pwd)"

JEST_DIR="$HOME/jest"
mkdir -p "$JEST_DIR"

CACHE_DIR="$JEST_DIR/.cache"
COVERAGE_DIR="$JEST_DIR/.coverage"

# Set COVERAGE_THRESHOLD if not set
if [ -z "$COVERAGE_THRESHOLD" ]; then
	COVERAGE_THRESHOLD='50'
fi

# Run Jest with coverage
COVERAGE_THRESHOLD="$COVERAGE_THRESHOLD"
npm run test:coverage+watch -- \
	--cacheDirectory "$CACHE_DIR" \
	--coverageDirectory "$COVERAGE_DIR"
