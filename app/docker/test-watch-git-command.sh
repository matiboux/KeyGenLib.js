#!/bin/sh
set -e


# ---
# Create git repositories

# Assert the reference git repository exists
REFERENCE_GIT_DIR="/ref"
if [ ! -d "$REFERENCE_GIT_DIR/.git" ]; then
	echo "Error: Reference git repository not found at '$REFERENCE_GIT_DIR'." 2>&1
	exit 1
fi

# Initialize work git repository
WORK_GIT_DIR="$(pwd)"
if [ ! -d "$WORK_GIT_DIR/.git" ]; then
	git init -b main "$WORK_GIT_DIR" > /dev/null 2>&1
fi

# Initialize output git repository
OUTPUT_GIT_DIR="/git"
if [ ! -d "$OUTPUT_GIT_DIR/.git" ]; then
	git init -b main "$OUTPUT_GIT_DIR" > /dev/null 2>&1
fi


# ---
# Configure git repositories

git config --global --add safe.directory "$REFERENCE_GIT_DIR"
git config --global --add safe.directory "$WORK_GIT_DIR"
git config --global --add safe.directory "$OUTPUT_GIT_DIR"

git config -f "$OUTPUT_GIT_DIR/.git/config" receive.denyCurrentBranch ignore


# ---
# Copy reference in work git repository

# Copy git history from reference repository to work repository
cd "$REFERENCE_GIT_DIR"
CURRENT_BRANCH="$(git branch --show-current)"

# Add remote to reference repository in work repository
cd "$WORK_GIT_DIR"
git remote remove origin > /dev/null 2>&1 || true
git remote add origin "$REFERENCE_GIT_DIR/.git" > /dev/null 2>&1
git fetch origin --prune > /dev/null 2>&1

# Set the work branch history to the reference branch history
cd "$WORK_GIT_DIR"
git reset --mixed "origin/$CURRENT_BRANCH" > /dev/null 2>&1

APP_PATH="app/app"

# Symlink app source code in work repository
cd "$WORK_GIT_DIR"
APP_SOURCE_PATH="$REFERENCE_GIT_DIR/$APP_PATH"
APP_DESTINATION_PATH="$WORK_GIT_DIR/$APP_PATH"
if [ ! -d "$APP_SOURCE_PATH" ]; then
	echo "Error: App source code not found at '$APP_SOURCE_PATH'."
	exit 1
fi
if [ ! -d "$APP_DESTINATION_PATH" ]; then
	mkdir -p "$APP_DESTINATION_PATH"
fi
if [ ! -L "$APP_DESTINATION_PATH" ]; then
	rm -rf "$APP_DESTINATION_PATH"
	ln -s "$APP_SOURCE_PATH" "$APP_DESTINATION_PATH"
fi


# ---
# Extract & Push app git history

# Extract app git history in the work repository
cd "$WORK_GIT_DIR"
git branch -D app-history > /dev/null 2>&1 || true
git subtree split --prefix="$APP_PATH" -b app-history "$(git branch --show-current)" > /dev/null 2>&1

# Push app git history to the output repository
cd "$WORK_GIT_DIR"
git push "$OUTPUT_GIT_DIR/.git" app-history:main --force > /dev/null 2>&1

# Delete the app-history branch in the work repository
git branch -D app-history > /dev/null 2>&1 || true

# Reset staged changes in the output repository
cd "$OUTPUT_GIT_DIR"
git reset --mixed > /dev/null 2>&1


# ---
# Verify the git history was extracted correctly

cd "$OUTPUT_GIT_DIR"
echo "Extracted app git history: $(git log -1 --pretty=format:'"%s" (%an) (%h)')"
