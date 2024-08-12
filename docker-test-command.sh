#!/bin/sh

set -e

# Run Jest tests with coverage
NPM_CONFIG_UPDATE_NOTIFIER=false \
npx jest --coverage \
	--coverageReporters="text" \
	--coverageReporters="text-summary" \
	--coverageReporters="json-summary"

# Get Jest coverage score
COVERAGE_STATEMENTS=$(jq '.total.statements.pct' < ./coverage/coverage-summary.json)
COVERAGE_BRANCHES=$(jq '.total.branches.pct' < ./coverage/coverage-summary.json)
COVERAGE_FUNCTIONS=$(jq '.total.functions.pct' < ./coverage/coverage-summary.json)
COVERAGE_LINES=$(jq '.total.lines.pct' < ./coverage/coverage-summary.json)
COVERAGE=$(awk "BEGIN {print ($COVERAGE_STATEMENTS + $COVERAGE_BRANCHES + $COVERAGE_FUNCTIONS + $COVERAGE_LINES) / 4}")

# Set COVERAGE_THRESHOLD if not set
if [ -z "$COVERAGE_THRESHOLD" ]; then
	COVERAGE_THRESHOLD='75'
fi

# Fail if coverage is below threshold
FAILED=$(awk "BEGIN {print ($COVERAGE < $COVERAGE_THRESHOLD)}")
if [ "$FAILED" = "1" ]; then
	COVERAGE_DISPLAY=$(awk "BEGIN {print int($COVERAGE * 10) / 10}")
	echo "Coverage of $COVERAGE_DISPLAY% is below threshold of $COVERAGE_THRESHOLD%" >&2 # stderr
	exit 1
fi
