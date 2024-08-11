#!/bin/sh

set -e

# Prefix the command with 'npm' if:
# - The first argument starts with a '-' (e.g. a flag like '--help'); or
# - The first argument does not match a known program.
if (
	[ "${1#-}" != "$1" ] ||
	[ ! -x "$(command -v "$1")" ]
); then
	# Prepend 'npm' to the command
	set -- npm "$@"
fi

# Use the original node entrypoint to run the command
exec docker-entrypoint.sh "$@"
